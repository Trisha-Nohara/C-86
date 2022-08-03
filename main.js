var canvas=new fabric.Canvas('my_Canvas');
block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update(){
  fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_x,
        left:player_x
    });
    canvas.add(player_object);
  });
}

function newImage(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_x,
            left:player_y
        });
        canvas.add(block_img_object);
    });
}