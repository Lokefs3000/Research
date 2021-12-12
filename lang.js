function loadLang(langPath) {
    console.log(langPath);

    var currentLang = readFile(langPath);

    console.log(currentLang);
}

function readFile(path) {
    var fr=new FileReader();
    fr.onload=function(){
        document.getElementById('output')
                .textContent=fr.result;
    }
      
    console.log(fr.readAsText(this.files[0]));  
}