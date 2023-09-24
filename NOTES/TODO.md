T O D O
================================================
================================================
S T A T E 
TODOS : [{id:1, entry:"abcdefg"}, {id:2, entry:"HIJKLMNOP}]
TODOSCOMPLETEDCOUNTER : 0-*
SCENEITEMSCOUNTER : 4
SCENEITEMSSHOWN : 0-4

user inputs text into text box
user hits submit button
form sends data to hub parent'S state : TODOS < append to state object
useEffect checks for changes in data > compare SCENEITEMSSHOW to SCENEITEMSCOUNTER & COUNT TODOS
if todos.count > 0
    check if any completed:true
    count if any completed:true
    if completed:true > 0 
        if completed:true >= sceneitemsshown
        1 >= 0 ? do something
            switch case for specific instructions?
            if COMPLETED = SHOWNITEMS : DO NOTHING (NULL)
            if COMPLETED < SHOWNITEMS : DO SOMETHING
            if COMPLETED > SHOWNITEMS : DO SOMETHING

| C-[COMPLETED ITEMS] | S-[SHOWN ITEMS] |
C: 0 | S: 0
    NULL
C: 1 | S: 0
    go into scene and display item no.1
    {scene} > .find > id[1] > display:true
C: 1 | S: 1
    NULL
C: 1 | S: 2
    {scene}.find( id[1] ).display = TRUE
    {scene}.find( id[2] ).display = FALSE
C: 2 | S: 0
    {scene}.find( id[1] ).display = TRUE
    {scene}.find( id[2] ).display = TRUE
C: 2 | S: 1
    {scene}.find( id[1] ).display = TRUE
C: 2 | S: 2
    NULL
C: 2 | S: 3
    {scene}.find( id[1] ).display = TRUE
    {scene}.find( id[2] ).display = TRUE
    {scene}.find( id[3] ).display = FALSE


if C is greater than S 
    and C is less than or equal to S


USER TICKS CHECK BOX OF TO DO LIST ITEM DISPLAYED ON INDEX
[X]





P A R E N T  COMPONENT > 
        NEXUS
          / 
    PRODUCTIVITY
          H U B ________ STATE __ SCENEITEMSCOUNT = 4 {1: "MOON", ETC.}
         /  |   \           | \
    FORM    |   INDEX       |  COUNTER
    /|\     |             TODOS
INFO | BUTTON
   INPUT    |
            |
          SCENE

INDEX : 
ITERATE OVER DATA | DISPLAY ALL TODOS
{sceneItems.map((item, index) => (
    <li key={index}>
    DISPLAY THIS {item.moonArt}
    </li>
))}















================================================
================================================
after today's interview..
    focus more on full-stack!
    show off more of your versatility in skill!

    USER ACCOUNTS
    SECURITY
    COMMERCE

"show me your greatest code achievement"
[] 
"show me a client's finished, deployed site."
[]
"show me backend work"
[]


 DREAM BIG, MY DEAR, BUT LET'S GET MOVING!
 [] finish hih nexus
 [] users | signin, login
 [] donation page (commerce?) '/give'
 [] deploy 
================================================
================================================

GET CRACKIN' ON SOME BACKEND!

[] USERS CAN SIGN UP FOR AN ACCOUNT
[] USERS CAN SIGN IN
[] DATA PERSISTS, EACH USER HAS THEIR OWN DATA
[] USERS CANNOT SEE OTHER USERS' DATA

BRANDING DEMOS - SHOW IT OFF!

[] KRADEVCO FEATURES APPS

================================================
================================================
[x] footer of warmth
[x] footer has z-index > bring element to back
[x] todo index box has border [x] remove <hr>'s
[x] define stroke logic 
    (a) art 
        (x)no stroke in component
        (x)stroke applied via CSS class/ID
    (b) art double (background layer)
        (x)no stroke in component
        (x)glow applied via CSS class/ID
            (x)border?
            (x)keyframes > opacity?

Take a gander and consider some logic..

    scene contains 4 elements (island, tree, moon, star)



frontend goals :
    [] svg group > animation transition
        [] on mount > "POP!"
            [] scale the image small to full-size
            [] animation is smooth and pleasing to the eye 
            [] glowing border
            [] glowing border pulses

        [] on unMount > "GHOST!"
            [] fade away slowly


================================================
================================================

Take a break from nav CSS
    debugging crashy VM is headachy
Take a break from stickers and todos logic
    abstracting logic is making me nervous

[x]Spend some time with your creative side - being an artist..
    make some svg stickers!
        [/]space island (dirt, sand, moss)
        [/]star pals (2 stars, smiles)
    []follow along a bit w/ vector graphics kindle book


[]make a 'resources' folder
--------------------------------
BUILD AN ENTIRE SCENE VIA STEPS
(1) background / scene
(2) tree 
(3) moon
LEVERAGE VIA {STATE} 
& CSS 'DISPLAY:NONE' PROPERTY
--------------------------------

FLAG : container default
    stickers.all.display = 'none'

to do list item submitted and appended to DOM
to do list item checkbox is ticked
to do list item is crossed out
IF completedItems >= 1
    completedItems.count()
    stickers.map((s,i) sticker.display = true)


to do list item properties
    -entry
    -ID number
    -'completed' class value
    

sticker properties
    -ID number


scene :
    background (image, cover)
    stickers (svg)
    tree = ID #1
    moon = ID #2

const stickers = [{1: "SVGMoon", 2: "SVGTree"}]
stickers[0][1] //=> "SVGMoon"

<!-- - - - - - -  -->

data.SpaceIsland
data.SpaceIsland.moonArt
data.SpaceIsland.moonBackground



















____________________________________---------------------
                                    WHAT DATA SHOULD LOOK LIKE
toDos = [
        {id: 1, "abcdefg"},
        {id: 2, "hijklmn"}
        ]
completedItems = [
    {}
]

handleCheckboxChange(){
    // do some checks
}

[x] create CSS class to crossout text

[x] create state array object
    > completedItems (list items with ticked checkboxes)
[x] create event handler function
    > handleCheckboxChange
        >
[x] modify mapping of 'toDo' array 
    > apply CSS class 
        > completedItems state
        > checkboxes get onClick event handler


svg resolutions (truly scalable? or do I need them in 100x200 start with for quality? define quality dimensions

define quality comparisons
define quality selection

reiterate stickers to have uniform size)        


- - - - - - - - - B I G   G O A L S   A N D   D R E A M S
[X]list item has check mark that toggles being crossed off
[]checked list item displays an image in the videogame container
[]multiple checked items display multiple images
[]unticking list item removes image from DOM
[x]i can make SVG's glow
[x]i can make SVG's that glow pulsate the effect
[]to do list form is on the right of the videogame


TO DO ITEM LISTED
TO DO ITEM CHECKBOX TICKED
TO DO ITEM CROSSED OFF
                DREAM GOAL
    WHEN LIST ITEM CHECKBOX TICKED & CROSSED OFF
        -ANIMATION > HAND SVG > SWEEPS FROM LEFT SIDE OF SCREEN INTO VIDEOGAME CONTAINER
            HAND SVG LAYERED ON TOP OF STICKER
        -STICKER IS DISPLAYED INSIDE OF THE VG CONTAINER                
-----------------------------------------------------------
PURPOSE OF APPLICATION
    EARN STICKER FOR EACH TO-DO ITEM COMPLETED
    ALL EARNED STICKERS ARE RENDERED ONTO THE DOM

MODE(S)
    STICKER BOOK COLLECTION
    BUILD AN ISLAND GETAWAY

POSSIBLE SCENES
    ISLAND GETAWAY
    SUNSET BACKGROUND GRADIENT
        BODY OF BLUE WATER
        LIGHT BROWN ISLAND
        PALM TREE
        SUN SETTING
        MOON
        STARS
    BODY OF WATER : MOVE LEFT - RIGHT - LEFT || GROW & SHRINK

    STICKER BOOK COLLECTION
    BACKGROUND LOOKS LIKE NOTEPAD
    FLEX CONTAINER
        TREE
        HEART
        STAR
        MOON
-----------------------------------------------------------

() SCENE CAN BE PREBUILT
    EACH STICKER 'DISPLAY: TRUE' OR FALSE
    STICKERS DEFAULT = 'DISPLAY: FALSE'
    COMPLETION STATUS TRIGGERS STICKER DISPLAY TOGGLE [A,B,C] 
    A.COMPLETE ? As.DISPLAY: 

C O M P L E T E D

[X](1) SUNSET BACKGROUND GRADIENT
[X](2) FORM ON NEXUS > SUBMIT BUTTON APPENDS INPUT BOX VALUE TO THE DOM
[x](3) TODO ENTRIES > CHECKBOX NEXT TO EACH LIST ITEM
                                        ------T O G G L E
[x](4) CHECKBOX > TICKED = LIST ITEM IS CROSSED OUT
[x](5) CHECKBOX > UNTICKED = LIST ITEM IS NOT CROSSED OUT
                                        ------T O G G L E

