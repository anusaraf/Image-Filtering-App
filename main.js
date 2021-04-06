const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');




/*
var $oldpaper = $('#oldpaperbtn');


Caman.Filter.register("oldpaper", function () {

    this.lomo(10);
   
    this.render();
});


$oldpaper.on('click', function (e) {
    Caman('#canvas', img, function () {
        this.oldpaper();

        this.lomo();
        this.render();
    });
});
*/

//TODO FILTER AND EFFECTS
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function () {
                this.brightness(5).render();
                this.Blendingmode('multiply');
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-5).render();
            });

        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(5).render();
            });

        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contract(-5).render();
            });

        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(5).render();
            });

        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-5).render();
            });

        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(5).render();
            });

        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-5).render();
            });

        } else if (e.target.classList.contains('sepia-add')) {
            Caman('#canvas', img, function () {
                this.sepia(20).render();
            });


        } else if (e.target.classList.contains('sepia-remove')) {
            Caman('#canvas', img, function () {
                this.sepia(-10).render();
            });
        

        } else if (e.target.classList.contains('hue-add')) {
            Caman('#canvas', img, function () {
                this.hue(10).render();
            });



        } else if (e.target.classList.contains('hue-remove')) {
            Caman('#canvas', img, function () {
                this.hue(-5).render();
            });



        } else if (e.target.classList.contains('sharpen-add')) {
            Caman('#canvas', img, function () {
                this.sharpen(10).render();
            });



        } else if (e.target.classList.contains('sharpen-remove')) {
            Caman('#canvas', img, function () {
                this.sharpen(-10).render();
            });


        } else if (e.target.classList.contains('gamma-add')) {
            Caman('#canvas', img, function () {
                this.gamma(0.1).render();
            });


        } else if (e.target.classList.contains('gamma-remove')) {
            Caman('#canvas', img, function () {
                this.gamma().render();
            });


        } else if (e.target.classList.contains('stackBlur-add')) {
            Caman('#canvas', img, function () {
                this.stackBlur(5).render();
            });



        } else if (e.target.classList.contains('stackBlur-remove')) {
            Caman('#canvas', img, function () {
                this.stackBlur(-5).render();
            });
        } else if (e.target.classList.contains('noise-add')) {
            Caman('#canvas', img, function () {
                this.noise(10).render();
            });

        } else if (e.target.classList.contains('noise-remove')) {
            Caman('#canvas', img, function () {
                this.noise(-10).render();
            });


        } else if (e.target.classList.contains('exposure-add')) {
            Caman('#canvas', img, function () {
                this.exposure(10).render();
            });


        } else if (e.target.classList.contains('exposure-remove')) {
            Caman('#canvas', img, function () {
                this.exposure(-5).render();
            });


        } else if (e.target.classList.contains('clip-add')) {
            Caman('#canvas', img, function () {
                this.clip(10).render();
            });


        } else if (e.target.classList.contains('clip-remove')) {
            Caman('#canvas', img, function () {
                this.clip(-10).render();
            });







        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage().render();
                
            });

        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo().render();
            });

        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function () {
                this.nostalgia().render();
            });

        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function () {
                this.clarity().render();
            });

        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function () {
                this.pinhole().render();
            });

        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess().render();
            });

        } else if (e.target.classList.contains('herMajesty-add')) {
            Caman('#canvas', img, function () {
                this.herMajesty().render();
            });


        } else if (e.target.classList.contains('sinCity-add')) {
            Caman('#canvas', img, function () {
                this.sinCity().render();
            });

        } else if (e.target.classList.contains('love-add')) {
            Caman('#canvas', img, function () {
                this.love().render();
            });

        } else if (e.target.classList.contains('sunrise-add')) {
            Caman('#canvas', img, function () {
                this.sunrise().render();
            });


        } else if (e.target.classList.contains('grungy-add')) {
            Caman('#canvas', img, function () {
                this.grungy().render();
            });



        } else if (e.target.classList.contains('jarques-add')) {
            Caman('#canvas', img, function () {
                this.jarques().render();
            });


        } else if (e.target.classList.contains('glowingsun-add')) {
            Caman('#canvas', img, function () {
                this.glowingSun().render();
            });


        } else if (e.target.classList.contains('orangePeel-add')) {
            Caman('#canvas', img, function () {
                this.orangePeel().render();
            });


        } else if (e.target.classList.contains('posterize-add')) {
            Caman('#canvas', img, function () {
                this.posterize(8, 8).render();
            });

        } else if (e.target.classList.contains('radialBlur-add')) {
            Caman('#canvas', img, function () {
                this.radialBlur().render();
            });


        } else if (e.target.classList.contains('emboss-add')) {
            Caman('#canvas', img, function () {
                this.emboss().render();
            });

        } else if (e.target.classList.contains('oldBoot-add')) {
            Caman('#canvas', img, function () {
                this.oldBoot().render();
            });

        } else if (e.target.classList.contains('edgeEnhance-add')) {
            Caman('#canvas', img, function () {
                this.edgeEnhance().render();
            });

        } else if (e.target.classList.contains('hazyDays-add')) {
            Caman('#canvas', img, function () {
                this.hazyDays().render();
            });
       

       

        } 
    }
});

//REVERT FILTER
revertBtn.addEventListener('click', e => {
    Caman('#canvas', img, function () {
        this.revert();
    });
});


//UPLOAD FILE

uploadFile.addEventListener('change', (e) => {

    //GET FILE
    const file = document.getElementById('upload-file')
        .files[0];

    //INIT FILEREADER

    const reader = new FileReader();

    if (file) {
        //set file name
        fileName = file.name;
        //read data as url
        reader.readAsDataURL(file);
    }

    //add img to canvas
    reader.addEventListener('load', () => {
        img = new Image();
        //set src
        img.src = reader.result;
        //on img load, add to canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');

        };
    },
        false
    );

});

//download event

downloadBtn.addEventListener('click', (e) => {

    const fileExtension = fileName.slice(-4);

    let newFileName;

    if (fileExtension === '.jpg' || fileExtension === '.png') {

        newFileName = fileName.substring(0, fileName.length-4) +'-edited.jpg';

    }
    //call download
    download(canvas, newFileName);
});

//Download function

function download(canvas, filename) {

    let e;
    let link = document.createElement('a');

    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
  //  let url = dataURL.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  //  link.setAttribute('href', url);
    
   // img.src = link.href;
    e = new MouseEvent('click');
    link.dispatchEvent(e);

    

}



function canfive() {

    ctx.drawImage(img, 40, 40, 230, 233);
    canvas.removeAttribute('data-caman-id');

}


function canfour() {

    ctx.drawImage(img, 40, 40, 230, 233);
    canvas.removeAttribute('data-caman-id');

    
}
function ab() {

    ctx.drawImage(img, 40, 40, 330, 433);
    canvas.removeAttribute('data-caman-id');
   
}



function can() {
    alert("hello");
    // ctx.drawImage(img, 10, 10, 150, 180);
    // canvas.removeAttribute('data-caman-id');
}



function canone() {

    var w = Number(document.getElementById('one').value);
    var h = Number(document.getElementById('two').value);
    var x = Number(document.getElementById('three').value);
    var y = Number(document.getElementById('four').value);
   
    ctx.fillStyle = "rgba(178, 176, 176, 0.60)";
    ctx.fillRect(x,y,w,h);
   
    
}
function cantwo() {

    var w = Number(document.getElementById('one').value);
    var h = Number(document.getElementById('two').value);
    var x = Number(document.getElementById('three').value);
    var y = Number(document.getElementById('four').value);

    Caman("#canvas", function () {
        this.crop(w, h, x, y);
        this.render();
    });

}


/*function resizeImage() {
   

}





function resetImage() {
    ctx.style.width = "100px";
    ctx.style.height = "100px";

}






*/



/*var filterControl = document.querySelectorAll('input[type=range]');

function applyfilter() {

    var computerfilters = '';
    filterControl.forEach(function (item,index) {
        computerfilters += item.getAttribute('data-filter') + '[' + item.value + item.getAttribute['data-scale'] + '] ';
    });
    img.style.filter = computerfilters;

}*/

/*
var $reset = $('#resetbtn');
var $brightness = $('#brightnessbtn');
var $noise = $('#noisebtn');
var $sepia = $('#sepiabtn');
var $contrast = $('#contrastbtn');
var $color = $('#colorbtn');

var $vintage = $('#vintagebtn');
var $lomo = $('#lomobtn');
var $emboss = $('#embossbtn');
var $tiltshift = $('#tiltshiftbtn');
var $radialblur = $('#radialblurbtn');
var $edgeenhance = $('#edgeenhancebtn');

var $posterize = $('#posterizebtn');
var $clarity = $('#claritybtn');
var $orangepeel = $('#orangepeelbtn');
var $sincity = $('#sincitybtn');
var $sunrise = $('#sunrisebtn');
var $crossprocess = $('#crossprocessbtn');

var $hazydays = $('#hazydaysbtn');
var $love = $('#lovebtn');
var $grungy = $('#grungybtn');
var $jarques = $('#jarquesbtn');
var $pinhole = $('#pinholebtn');
var $oldboot = $('#oldbootbtn');
var $glowingsun = $('#glowingsunbtn');

var $hdr = $('#hdrbtn');
var $oldpaper = $('#oldpaperbtn');
var $pleasant = $('#pleasantbtn');

var $save = $('#savebtn');




$('input[type=range]').change(applyFilters);

function applyFilters() {
    var hue = parseInt($('#hue').val());
    var cntrst = parseInt($('#contrast').val());
    var vibr = parseInt($('#vibrance').val());
    var sep = parseInt($('#sepia').val());

    Caman('#canvas', img, function () {
        this.revert();
        this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
    });
}*/

/*
document.addEventListener('DOMContentLoaded', function () {

function changeSliderHandler(event) {

    Caman("#canvas", function renderCaman() {

        this.revert(false);
        this[event.target.name](event.target.value).render();
    });

    };
    var brightnessRange = document.getElementById("gs");
    brightnessRange.onchange = changeSliderHandler;

}, false);
*/

//another code for slider

let target = document.getElementById('targetimg');
let inputrange = document.querySelectorAll('.slider');



for (let i=0; i <= inputrange.length-1; i++) {
    inputrange[i].addEventListener('input', editimage);
}


function editimage() {

    let gs = document.getElementById("gs");
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

   
    let gsval= gs.value;
   let blurval = blur.value;
  let huerotateval = huerotate.value;
   let sepiaval = sepia.value;
   

    

    canvas.style.filter = 'grayscale(' + gsval + '%)  blur(' + blurval + 'px) hue-rotate(' + huerotateval + 'deg) sepia(' + sepiaval + '%)';
    
}




    


