function allStop()
{
 parent.LeftupFrame.document.all.MediaPlayer.Controls.Pause();
 parent.document.all.RightFrame.scrolling="yes";
 parent.RightFrame.document.body.style.overflow="scroll";
}

function OpenContent(URL)
{
//  parent.LeftupFrame.MediaPlayer.Controls.Pause();
//  parent.RightFrame.location = URL;
  open(URL);
}

function Skip(seconds)
{
  parent.LeftupFrame.MediaPlayer.Controls.currentPosition = seconds;
  parent.LeftupFrame.MediaPlayer.Controls.Play();
}

function ShowPhoto(FileName)
{
  document.writeln("<div id='LayerPhoto' style='POSITION: absolute; LEFT: 0px; TOP: 0px; width: 207px; height: 158px; z-index:2; border: 1px none #000000'><img width=100% height=100% src=" + FileName + "></div>");
}