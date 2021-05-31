(function (){
    var names = ["Hemal", "Jigar", "Guru", "Keyur", "Chetan", "John", "jack", "Andrew","Jadeja"];

    for (let i = 0; i < names.length; i++) {
        var firstletter = names[i].charAt(0).toLowerCase();
        // console.log(firstletter);
        
        if(firstletter == 'j'){
            byeSpeaker.speak(names[i]);
        }
        else{
            helloSpeaker.speak(names[i]);
        }
    }
})();
