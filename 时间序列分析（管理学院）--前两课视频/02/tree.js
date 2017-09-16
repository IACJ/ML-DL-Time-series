/** ͼƬ����Ŀ¼ 	*///~~
	imageDir = "images";
/** �ļ��ڵ��ͼƬ *///~~
	img_file = imageDir+"/file.gif";
/** �رյ�Ŀ¼��ͼƬ *///~~
	img_folder_close = imageDir+"/close.gif";
/** ���м�ļӺŵ�ͼƬ	*///~~
	img_plus = imageDir+"/plusnode.gif";
/** ����ĩβ�ļӺŵ�ͼƬ *///~~
	img_plus_last = imageDir+"/pluslastnode.gif";
/** �򿪵�Ŀ¼��ͼƬ *///~~
	img_folder_open = imageDir+"/open.gif";
/** ����ĩβ�ļ��ŵ�ͼƬ *///~~
	img_minus_last = imageDir+"/minuslastnode.gif";
/** ���м�ļ��ŵ�ͼƬ	*///~~
	img_minus = imageDir+"/minusnode.gif";
/** �޽ڵ�������ͼƬ *///~~
	img_line = imageDir+"/line.gif";
/** ���ڵ������ͼƬ	*///~~
	img_line_last = imageDir+"/lastnode.gif";
/** �м�ڵ������ͼƬ	*///~~
	img_line_mid = imageDir+"/node.gif";
/** �հ������ͼƬ *///~~
	img_blank = imageDir+"/blank.gif";

/*******************************************���ù�����ͼƬ��������**************************************************/

function tree() {

/** ���ڵ� *///~~
	this.root = null;
/** �ڵ���� *///~~
	this.length = 0;
/** �ڵ����� *///~~
	this.nodes = new Array();
/** ��drawFrontLineʱ������ʱ�洢�ַ��� *///~~
//	this.tempStr = "";

/** ��Ӹ��ڵ� *///~~
	this.addRoot = addRoot;
/** ��ӽڵ� *///~~
	this.addNode = addNode;

/** �������ڵ� *///~~
	this.drawRoot = drawRoot;
/** �����ڵ�ǰ�Ŀհ�ͼƬ��������ͼƬ *///~~
	this.drawFrontLine = drawFrontLine;
/** �����ڵ� *///~~
	this.drawNode = drawNode;
/** �������нڵ� *///~~
	this.drawNodes = drawNodes;
/** �õ��ڵ�ĸ��ڵ� *///~~
	this.getParent = getParent;
/** ��ӽڵ�ʱ����ͬһ��������ڵ��isLast��������Ϊfalse *///~~
	this.setOtherIsLast = setOtherIsLast;
}
/** 
 * ���ڵ���� 
 * @param id ���ڵ��id��
 * @param name ���ڵ�����,��ʾ��ҳ������ӵ�����
 * @param url ����
 * @param target ָʾ���ӵ�Ŀ��ҳ��
*/
function root(id,name,url,target,t) {
	this.id = id; 
	this.name = name;
	this.parentId = null;
	this.type = "root";
	this.url = url;
	this.target = target;
	this.winTitle=t;
}

function addRoot(root) {
	this.root = root;
	this.length = 1;
	this.nodes[0] = root;
}
/**
 * �ڵ����
 * @param id �ڵ�id��
 * @param name �ڵ�����,��ʾ��ҳ���ϵ����ӵ�����
 * @param parentId ���ڵ�id��
 * @param type �ڵ������(folder|file)
 * @param url �ڵ������
 * @param target �ڵ����ӵ�Ŀ��ҳ��
*///~~

function node(id,name,parentId,type,url,target,title,style) {
	/** �ڵ�id�� *///~~
	this.id = id;
	/** �ڵ�����,��ʾ��ҳ���ϵ����ӵ����� *///~~
	this.name =name;
	/** ���ڵ�id�� *///~~
	this.parentId = parentId;
	/** �ڵ������(folder|file) *///~~
	this.type = type;
	/** �ڵ������ *///~~
	this.url = url;
	/** �ڵ����ӵ�Ŀ��ҳ�� *///~~
	this.target = target;
	/** title *////~~
	this.title=title;
	/** ��ʽ *///~~~
	this.style=style;

	/** �ڵ��ͼƬ(Ŀ¼���ļ���) *///~~
	this.image = "";
	/** �ڵ��ǰ��ͼƬ(�ӺŻ���Ż�������) *///~~
	this.fImage = "";
	/** �Ƿ���ͬ�������ڵ� *///~~
	this.isLast = false;
}

/** �ж�һ���ڵ��Ƿ��и��ڵ㣬������򷵻��丸�ڵ㣬���û�з���null */
function getParent(node) {
	for (var i=0;i<this.length;i++)	{
		if (this.nodes[i].id == node.parentId) {
			return this.nodes[i];
		}
	}
	return null;
}

/** �����һ���½ڵ�󣬽���������ͬһ�������Ԫ�ص�isLast��־����Ϊfalse */
function setOtherIsLast(node) {
	for (var i=1;i<this.length;i++) {//i=1,��ʾ���������ڵ����ڵ�ѭ��
		if (this.nodes[i].parentId == node.parentId && this.nodes[i].isLast) {//����ҵ����ڵ���ͬ�ģ�����isLastΪtrue�Ľڵ�
			this.nodes[i].isLast = false; //���øýڵ��isLastΪfalse
			if (this.nodes[i].type == "folder"){ //����ͼƬΪ��ĩ�ڵ�ͼƬ
				this.nodes[i].fImage = img_plus;
			} else {
				this.nodes[i].fImage = img_line_mid;
			}
			return true;
		}
	}
	return false;
}

/** Ϊ���Ľڵ���nodes[]���һ���µĽڵ� */
function addNode(node) {
	if (this.getParent(node) != null){ //����и��ڵ�
		this.setOtherIsLast(node); //����ͬ���е�����Ԫ��Ϊ��ĩ�ڵ�
		node.isLast = true; //���ñ��ڵ�Ϊĩ�ڵ�
		if (node.type == "folder"){ //���ݽڵ���������ͼƬ
				node.image = img_folder_close;
				node.fImage = img_plus_last;
		} else {
				node.image = img_file;
				node.fImage = img_line_last;
		}
		this.nodes[this.length] = node; //��Ӹýڵ㵽���Ľڵ���nodes[]
		this.length++; //�ڵ�����1
	} else {
		alert("û���ҵ��ýڵ�ĸ��ڵ㣬����һ���Ƿ��ڵ�!");
	}
}

/** �������ڵ� */
function drawRoot() {
	document.write("<table border='0' cellspacing='0' cellpadding='0'>");
	document.write("<tr><td>");
	document.write("</td><td >");
	document.write("<a onFocus='this.blur()' href='"+this.root.url+"' target='"+this.root.target+"'>"+this.root.name+"</a>");
	document.write("</td></tr>");
	document.write("</table>");
}

/** �����ڵ� */
function drawNode(node) {
	document.write("<table border='0' cellspacing='0' cellpadding='0'>");
	document.write(" <tr><td>");
	this.drawFrontLine(node);
	if (node.type == "folder"){
		document.write("<a onClick='clickOnFolder()' onFocus='this.blur()' href='#'><img border='0' src='"+node.fImage+"' align='absmiddle'></a>");
		document.write("<a onFocus='this.blur()' href='"+node.url+"' target='"+node.target+"' class='"+node.style+"'><img border='0' src='"+node.image+"' align='absmiddle'></a>");
		document.write("</td><td>");
		document.write("<a onClick='clickOnFolder()' onFocus='this.blur()' href='"+node.url+"'  id='folderLink' target='"+node.target+"' title='"+node.title+"' class='"+node.style+"'>"+node.name+"</a>");
	} else {
		document.write("<img border='0' src='"+node.fImage+"' align='absmiddle'>");
		document.write("<a onFocus='this.blur()' href='"+node.url+"' target='"+node.target+"' title='"+node.title+"' class='"+node.style+"'><img border='0' src='"+node.image+"' align='absmiddle'></a>");
		document.write("</td><td>");
		document.write("<a onFocus='this.blur()' href='"+node.url+"' target='"+node.target+"' title='"+node.title+"' class='"+node.style+"'>"+node.name+"</a>");
	}
	document.write(" </td></tr>");
	document.write("</table>");
}

/** �����������Ľڵ��� */
function drawNodes(node) {
	if (node.type != "root"){
		document.write("<div style='display:none'>");
	}
	for (var i=1;i<this.length;i++){
		if (this.nodes[i].parentId!=null && this.nodes[i].parentId == node.id){
			this.drawNode(this.nodes[i]); //�����ڵ�
			this.drawNodes(this.nodes[i]); //�ݹ黭�������ڵ���Ľڵ�
		}
	}
	if (node.type != "root"){
		document.write("</div>");
	}
}

/** �����ڵ�ǰ��ǰ��ͼƬ,�пո������ͼƬ.
	����丸�ڵ���һ��ĩ�ڵ㣬��ô�ö�Ӧ�е�ǰ��ͼƬΪ�ո�ͼƬ.
	�������ĩ�ڵ�,Ӧ���������ͼƬ.
	��������˵ݹ�����,��������ͼƬ˳��Ϊ��˳��,��������һ��tempStr���ݴ���Ҫ������ͼƬ,
	���Ա�֤��ͼƬ˳��Ϊ��ȷ˳��. */
function drawFrontLine(node) {
	var tempStr = "";
	for (var i=1;i<this.length;i++){
		if (this.nodes[i].id == node.parentId){
			if (this.nodes[i].isLast){
				tempStr = "<img src='"+img_blank+"'>" + tempStr;;
			} else {
				tempStr = "<img src='"+img_line+"'>" + tempStr;
			}
			this.drawFrontLine(this.nodes[i]);
		}
	}
	document.write(tempStr);
}

/** �����Ŀ¼�ڵ��ǰ��"�Ӻ�|����"ͼƬʱ��չ����������㣬������Ӧ��ͼƬ�������ͼƬ��ʵ�ֶ�̬�������� */
function clickOnFolder() {
	var srcIndex = event.srcElement.sourceIndex;

/**�Ӱ�����ӵģ�������Ӻ�|����ͼƬ�Ե�����ʱ��Ҳչ���������㡣**/
	if(document.all[srcIndex+2].tagName!="IMG"){
		srcIndex-=4;
	}


	var divElement = document.all[srcIndex+5]; //�õ������
	var imgElement = document.all[srcIndex+2]; //�õ�ͼƬ����
	var fimgElement = document.all[srcIndex]; //�õ�ǰ��ͼƬ����(��������)
	
	// jeickey function 
	document.title=this.root.winTitle;
	
	if (divElement.style.display == "none"){
		divElement.style.display = "";
		imgElement.src=img_folder_open;;
		if (fimgElement.src!=null && fimgElement.src.indexOf(img_plus)!=-1){
			fimgElement.src=img_minus;
		} else {
			fimgElement.src=img_minus_last;
			}
	} else {
		divElement.style.display = "none";
		imgElement.src=img_folder_close;
		if (fimgElement.src!=null && fimgElement.src.indexOf(img_minus)!=-1){
			fimgElement.src=img_plus;;
		} else {
			fimgElement.src=img_plus_last;
		}
	}
}