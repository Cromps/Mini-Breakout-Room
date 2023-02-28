var progress = 1;
var t = 0;
var tools = 0;
var escape_door = 0;
var escape_safe = 0;

var ptext = document.getElementById("text");
var scissors = document.getElementById("scissor_icon");
var rope = document.getElementById("rope_icon");
var screwdriver = document.getElementById("screwdriver_icon");
var wrench = document.getElementById("wrench_icon");
var scalpel = document.getElementById("scalpel_icon");
var picture1 = document.getElementById("picture1");
var safe_icon = document.getElementById("safe");

var cupboard_icon = document.getElementById("cupboard");
var door_icon = document.getElementById("door");
var bed_icon = document.getElementById("bed");
var clock_icon = document.getElementById("clock");
var board_icon = document.getElementById("blackboard");
var window_icon = document.getElementById("window");


function hideObjects(a,b,c,d,e,f,g, h){
    if(h == true){
        a.style.visibility = "hidden";
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";          
        e.style.visibility = "hidden";
        f.style.visibility = "hidden";
        g.style.visibility = "hidden";
        document.getElementById("safe_code").style.visibility = "visible";
        document.getElementById("safe_code").style.animation = "fade 1s linear"
        document.getElementById("safe_enter").style.visibility = "visible";
        document.getElementById("safe_enter").style.animation = "fade 1s linear"
        document.getElementById("game_canv").style.backgroundImage = "url('safe_enter.jpg')"
    }
    else{
        a.style.visibility = "visible";
        b.style.visibility = "visible";
        c.style.visibility = "visible";
        d.style.visibility = "visible";
        e.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        document.getElementById("safe_code").style.visibility = "hidden";
        document.getElementById("safe_enter").style.visibility = "hidden";
        document.getElementById("game_canv").style.backgroundImage = "url('roomscene3.png')"
    }
}

function end_game(a,b,c,d,e,f,g, h){
    if(h == true){
        a.style.visibility = "hidden";
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";          
        e.style.visibility = "hidden";
        f.style.visibility = "hidden";
        g.style.visibility = "hidden";
        document.getElementById("safe_code").style.visibility = "visible";
        document.getElementById("safe_code").style.animation = "fade 1s linear"
        document.getElementById("safe_enter").style.visibility = "visible";
        document.getElementById("safe_enter").style.animation = "fade 1s linear"
        document.getElementById("game_canv").style.backgroundImage = "url('safe_enter.jpg')"
    }
    else{
        a.style.visibility = "hidden";
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
        e.style.visibility = "hidden";
        f.style.visibility = "hidden";
        g.style.visibility = "hidden";
        document.getElementById("safe_code").style.visibility = "hidden";
        document.getElementById("safe_enter").style.visibility = "hidden";
        document.getElementById("game_canv").style.backgroundImage = "url('end.png')"
    }
}

function submitCode(){
    ptext.innerHTML = ""
    let code = +document.getElementById("safe_code").value.trim();
    if(code.toString().length !== 4){
        let display = "I need to enter 4 digits. No less.";
        typewrite(t, display);
    }
    else if(code !== 1245){
        let display = "Didn't work.";
        typewrite(t, display);
    }
    else if(code == 1245){
        let display = "I think the safe opened.";
        typewrite(t, display);
        document.getElementById("game_canv").style.backgroundImage = "url('safe_inside.jpg')";
        document.getElementById("screw_pick").style.visibility = "visible";
        document.getElementById("safe_code").style.visibility = "hidden";
        document.getElementById("safe_enter").style.visibility = "hidden";
        document.getElementById("get_driver").style.visibility = "visible";
        document.getElementById("get_driver").style.animation = "fade 1s linear";
        progress++;
    }
}

function getScrew(){
    ptext.innerText = "";
    screwdriver.style.visibility = "visible";
    screwdriver.style.animation = "fade 1s linear";
    progress++
    document.getElementById("screw_pick").style.visibility = "hidden";
    document.getElementById("game_canv").style.backgroundImage = "url('roomscene.png')";
    document.getElementById("get_driver").style.visibility = "hidden";
    hideObjects(cupboard_icon, door_icon, window_icon, board_icon, clock_icon, bed_icon, safe_icon, false);
}

function detectMouse(){
    var canvas = document.getElementById("game_canv");
    canvas.addEventListener("mousedown", doMouseDown, false); 
}

function doMouseDown(){
    ptext.innerHTML = "";
    if(progress == 1){
    let display = "I can't reach there while tied. I should look for a way out of these ropes. ";
    typewrite(t, display);
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 0){
        let display = "There doesn't seem to be much point in using this here";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 || progress== 5 || progress == 6){
        let display = "There doesn't seem to be much here";
        typewrite(t,display);
    }
    else if(progress == 7){
        let display = "I should pick up the screwdriver.";
        typewrite(t, display);
    }
    else if(progress == 8){
        let display = "I found a screwdriver, now what can I do with it?";
        typewrite(t, display);
    }
    else if(progress == 9){
        let display = "The wrench has 1 very obvious task.";
        typewrite(t, display);
    }
    else if(progress == 10 || progress == 11){
        let display = "I have everything I need to escape...hopefully.";
        typewrite(t, display);
    }
}



async function typewrite(t, sentence) {
    const letters = sentence.split("");
    let text = document.getElementById("text");
    let y = Math.random();
    if(y > 0.5){
        let audio = new Audio("typesound4.m4a");
        audio.playbackRate = 1;
        let i = 0;
        while(i < letters.length) {
          await waitForMs(20);
          audio.play();
          text.append(letters[i]);
          i++;
        }
        audio.pause();
        return;
    }
    else{
        let audio = new Audio("typesound4.m4a");
        audio.playbackRate = 1;
        let i = 0;
        while(i < letters.length) {
          await waitForMs(20);
          audio.play();
          text.append(letters[i]);
          i++;
        }
        audio.pause();
        return;
    }
}
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

//Inspect item functions here//

function cupboard(){
    ptext.innerHTML = "";
    if(progress == 1){
        let display = "(You find scissors in the cupboard. It's a convenient escape. You should use this to cut the rope.)";
        typewrite(t, display);
        scissors.style.visibility = "visible";
        scissors.style.animation = "fade 1s linear";
        progress++;
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 0){
        let display = "I don't think there will be any point in using this here.";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 || progress == 5 || progress == 6){
        let display = "This is where I found the scissors. There doesn't seem to be much more to explore here.";
        typewrite(t, display);
    }
    else if(progress == 8 || progress == 9 || progress == 10 || progress == 11){
        let display = "Nothing new teleported in here.";
        typewrite(t, display);
    }
}


function door(){
    ptext.innerHTML = "";
    if (progress == 1){
        let display = "It looks like that's my way out of here. I should take a closer look later.";
        typewrite(t, display);
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 5 && tools !== 0 && tools !== 6){
        let display = "I don't think there will be any point using this here.";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 || progress == 5){
        let display = "The door seems to boarded up. The handle is also chained up.";
        typewrite(t, display);
    }
    else if(progress == 6){
        let display = "I wonder why they bothered using chains and boarding up the door, from the inside. Shouldn't it be done from the outside?";
        typewrite(t, display);
    }
    else if(progress == 8){
        let display = "If only I could remove the bolts with the screwdriver.";
        typewrite(t, display);
    }
    else if(progress == 9 && tools !== 5){
        let display = "It's bolted. I could use one of my tools for that.";
        typewrite(t, display);
    }
    else if(progress == 9 && tools == 5 || progress == 10 && tools == 5 && scalpel.style.visibility == "visible"){
        let display = "I can remove the bolts from the door. (You now have to find a way to remove the lock that chains up the door.";
        typewrite(t, display);
        progress++;
        tools = 0;
        escape_door = 1;
    }
    else if(progress == 10 && tools !== 5  && tools !== 6 && scalpel.style.visibility == "visible"){
        let display = "The door has been boarded up with bolts, and it has a chain with a lock. It's pretty obvious what to do here.";
        typewrite(t, display);
    }
    else if(progress == 10 && tools !== 5 && scalpel.style.visibility !== "visible"){
        let display = "I removed the bolts from the door, but I still need to figure out how to unlock the chains.";
        typewrite(t, display);
    }
    else if(progress == 10 && tools == 5 && scalpel.style.visibility !== "visible"){
        let display = "I've already removed the bolts. What more do you want me to do?!";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 10 && tools == 6){
        let display = "I can use the lockpick for the chains. (You remove the chains on the door. You need to find a way to remove the bolts that are boarding up the door.";
        typewrite(t, display);
        progress++;
        escape_safe++;
        tools = 0;
    }
    else if(progress == 11 && tools == 5 && escape_door == 1){
        let display = "I've already removed the bolts. What more do you want me to do?!";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 11 && tools == 5 && escape_safe == 1){
        let display = "This is it. The final obstacle, isn't it? (You remove the bolts. The door unlocks...";
        typewrite(t, display);
        tools = 0;
        end_game(cupboard_icon, door_icon, window_icon, board_icon, clock_icon, bed_icon, safe_icon, false);
        progress++;
    }
    else if(progress == 11 && tools == 6 && escape_safe == 1){
        let display = "Sadly a lockpick can't remove bolts as well.";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 11 && tools == 6 && escape_door == 1){
        let display = "This is it. The final obstacle, isn't it? (You unlock the chains. The door unlocks...";
        typewrite(t, display);
        tools = 0;
        end_game(cupboard_icon, door_icon, window_icon, board_icon, clock_icon, bed_icon, safe_icon, false);
        progress++;
    }
}

function bed(){
    ptext.innerHTML = "";
    if(progress == 1){
        let display = "If only I was tied up on that.";
        typewrite(t, display);
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 0){
        let display = "I don't think there will be any point in using this here";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3){
        let display = "It seems awfully clean and cozy. I suppose that means I'm suppos-   ! There's a photo of three balloons. I wonder why its here. (You take it and keep it with you)";
        typewrite(t, display);
        picture1.style.visibility = "visible";
        picture1.style.animation = "fade 1s linear";
        progress++;
    }
    else if(progress == 4 || progress == 5){
        let display = "There seems to be nothing else of value here. I could take a nap though. ";
        typewrite(t, display);
    }
    else if(progress == 6){
        let display = "I really want to sleep";
        typewrite(t, display);
    }
    else if(progress == 8){
        let display = "I think the bed is dirtier than it was when I woke up.";
        typewrite(t, display);
    }
    else if(progress == 9){
        let display = "I'm nearly out of here. No time for sleep.";
        typewrite(t, display);
    }
    else if(progress == 10 || progress == 11){
        let display = "I have everything I need to escape. No time to slack off.";
        typewrite(t, display);
    }
}

function clock(){
    ptext.innerHTML = "";
    if(progress == 1){
        let display = "Exactly 4 o'clock. Wait, nevermind, the clock's broken. ";
        typewrite(t, display);
    } 
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 4 && tools !== 0){
        let display = "I don't think there will be any point in using this here";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 || progress == 5){
        let display = "4 o'clock. I wonder what time it really is. Maybe I could open up the clock and fix it..";
        typewrite(t, display);
    }
    else if(progress == 6){
        let display = "I wonder if the time the clock is set to, has any meaning.";
        typewrite(t, display);
    }
    else if(progress == 8 && tools !== 4){
        let display = "I suppose it was a pretty obvious hint for the safe.";
        typewrite(t, display);
    }
    else if(progress == 8 && tools == 4){
        let display = "I could try seeing whats inside......There's a wrench?!";
        typewrite(t, display);
        wrench.style.visibility = "visible";
        wrench.style.animation = "fade 1s linear";
        progress++;
        tools = 0;
    }
    else if(progress == 9 || progress == 10){
        let display = "Why was there a wrench in here, of all things.";
        typewrite(t, display);
    }
    else if(progress == 11){
        let display = "Last chance to see the time. Still 4 o'clock.";
        typewrite(t, display)
    }
}


function board(){
    ptext.innerHTML = "";
    if(progress == 1){
        let display = "There's a picture stuck on the blackboard. I can't make out what it is from here. I should focus on getting out of these ropes.";
        typewrite(t, display);
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 0 && tools !== 3){
        let display = "I don't think there will be any point in using this here.";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 && tools !== 3){
        let display = "Its a picture of two. They seem to be out at a park. Why is this picture here, on a blackboard? The plus signs are also bothering me.";
        typewrite(t, display);
    }
    else if(progress == 4 && tools == 3){
        let display = "This picture seems like it belongs here. Now I have two pictures seperated by a plus sign. What could it mean?";
        typewrite(t, display);
        document.getElementById("game_canv").style.backgroundImage = "url('roomscene3.png')";
        tools = 0;
        progress++;
        if(safe_icon.style.visibility == "visible"){
            progress++;
        }
        else{
            
        }
    }
    else if(progress == 5){
        let display = "I have a picture of two and a picture of 3 balloons, with an addition sign in between. I wonder what it means.";
        typewrite(t, display);
    }
    else if(progress == 6){
        let display = "2 people and 3 balloons. Does this have any relevance?";
        typewrite(t, display);
    }
    else if(progress == 8 || progress == 9 || progress == 10){
        let display = "Couldn't they have just given me the code?";
        typewrite(t, display);
    }
    else if(progress == 11){
        let display = "I wonder if the pictures had any other meaning. Too late to think about that now, I suppose.";
        typewrite(t, display);
    }
}

function windows(){
    ptext.innerHTML = "";
    if(progress == 1){
        let display = "I wonder if I could escape through there.";
        typewrite(t,display);
    }
    else if(progress == 2){
        let display = "I can check there again after I free myself.";
        typewrite(t,display);
    }
    else if(tools !== 0 && tools !== 2){
        let display = "I don't think there will be any point in using this here.";
        typewrite(t,display);
        tools = 0;
    }
    else if(progress == 3 || progress == 4 && tools !== 2 || progress == 5 && tools !== 2){
        let display = "It looks to be a fake window. It leads right into another room with a box in it, but if I go in, I won't be able to get out. ";
        typewrite(t, display);
    }
    else if(progress == 4 && tools == 2){
        let display = "I could go into this fake window, and get back here using the rope.. (You tie the rope off the window sill, and head into the room. Inside you see a safe. After some struggling, you bring it back up into the original room.)";
        typewrite(t, display);
        tools = 0;
        safe_icon.style.visibility = "visible";
    }
    else if(progress >= 5 && tools == 2){
        if(safe_icon.style.visibility == "visible"){
            let display = "I've already been in there. There's nothing more to explore.";
            typewrite(t, display);
            tools = 0;
        }
        else{
            let display = "I could go into this fake window, and get back here using the rope.. (You tie the rope off the window sill, and head into the room. Inside you see a safe. After some struggling, you bring it back up into the original room.)";
            typewrite(t, display);
            tools = 0;
            safe_icon.style.visibility = "visible";
            progress++;
        }
    }
    else if(progress == 6){
        let display = "Fake window with a safe in it, huh? Why am I really here?";
        typewrite(t, display);
    }
    else if(progress == 8){
        let display = "Why hide a screwdriver, in a safe, thats in a room behind a fake window?";
        typewrite(t, display);
    }
    else if(progress == 9 || progress == 10 || progress == 11){
        let display = "If only there was a better view.";
        typewrite(t, display);
    }
}

function safeBox(){
    ptext.innerHTML = "";
    if(tools !== 0 && tools !== 5){
        let display = "I don't see the point.";
        typewrite(t, display);
        tools = 0;
    }
    else if(progress == 5 || progress == 4){
        let display = "A safe. It seems to be a 4 number combination lock. I should look around and see if I can figure out the code";
        typewrite(t, display);
    }
    else if(progress == 6){
        let display = "Let's see if I can open this up.";
        typewrite(t, display);
        hideObjects(cupboard_icon, door_icon, window_icon, board_icon, clock_icon, bed_icon, safe_icon, true);
        safe_icon.style.animation = "fade 1s linear";
    }
    else if(progress == 8 || progress == 9 && tools !== 5 || progress == 10 && tools !== 5){
        let display = "Is it just me, or did the inside of the safe look smaller than what it should be? It also had bolts in it.";
        typewrite(t, display);
    }
    else if(progress == 9 && tools == 5 || progress == 10 && tools == 5 && scalpel.style.visibility !== "visible"){
        let display = "I could try removing the bolts in the safe with the wrench...-...!- A hidden compartment?! There's a lockpick in here.";
        typewrite(t, display);
        tools = 0;
        scalpel.style.visibility = "visible";
        scalpel.style.animation = "fade 1s linear";
        progress++;
    }
    else if(progress == 10 && tools == 5 && scalpel.style.visibility == "visible" || progress == 11 && tools == 5 && scalpel.style.visibility == "visible"){
        let display = "Doesn't seem to be any other bolts to undo here. I should focus on escaping.";
        typewrite(t, display);
        tools = 0;
    }
}

//Tool action functions here//

function scissorAction(){
    ptext.innerHTML = "";
    if(progress == 2){
        let display = "I can use this to cut this rope. (You use the scissors to free yourself. You acquire the rope that was tying you down)";
        typewrite(t, display);
        rope.style.visibility = "visible";
        rope.style.animation = "fade 1s linear";
        progress++;
    }
    else if(progress == 3){
        let display = "I should take a look at everything in the room first, before trying to use this.";
        typewrite(t, display);
    }
    else if(progress == 4 || progress == 5 || progress == 6 || progress == 8 || progress == 9 || progress == 10 || progress == 11){
        let display = "I wonder if I can use the scissors somewhere. (Click on a location you would like to use this object).";
        typewrite(t, display);
        tools = 1;
    }
}

function ropeAction(){
    ptext.innerHTML = "";
    if(progress == 3){
        let display = "I should take a look at everything in the room first before trying to use this.";
        typewrite(t, display);
    }
    else if(progress == 4 || progress == 5 || progress == 6 || progress == 8 || progress == 9 || progress == 10 || progress == 11){
        let display = "I wonder if I can use the rope somewhere. (Click on a location you would like to use this object).";
        typewrite(t, display);
        tools = 2;
    }
}

function picture1Action(){
    ptext.innerHTML = "";
    if(progress == 4){
        let display = "I wonder where this picture belongs to.. (Click on a location you would like to use this object on)";
        typewrite(t, display);
        tools = 3;
    }
    else{
        let display = "I don't think I can use the picture anywhere else.";
        typewrite(t, display);
    }
}

function screwAction(){
    ptext.innerHTML = "";
    if(progress == 8){
        let display = "I might be able to use this on one thing here...";
        typewrite(t, display);
        tools = 4;
    }
}

function wrenchAction(){
    ptext.innerHTML = "";
    if(progress == 9){
        let display = "There are 2 places I feel I should try this on.";
        typewrite(t,display);
        tools = 5;
    }
    else if(progress == 10){
        let display = "There's another place I think this can be used on.";
        typewrite(t, display);
        tools = 5;
    }
    else if(progress == 11 && escape_door == 1){
        let display = "There's nowhere else I can use this.";
        typewrite(t, display);
    }
    else if(progress == 11 && escape_safe == 1){
        let display = "The final task...";
        typewrite(t, display);
        tools = 5;
    }
}

function scalpelAction(){
    ptext.innerHTML = "";
    if(progress == 10){
        let display = "There's only one place I can use this.";
        typewrite(t, display);
        tools = 6;
    }
    else if(progress == 11){
        let display = "Let's see...";
        typewrite(t, display);
        tools = 6;
    }
}

