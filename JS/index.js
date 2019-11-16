const vetor = ["Hecarim","Gnar","Irelia","Lissandra","Sion"];
const midlane = ["Yasuo","Annie","Diana", "Katarina", "Ahri"];
const junglelane = ["Amumu","Master Yi","Jarvan", "Nidalee", "Vi"];
const adc=["Corki","Graves","Jinx","Kalista","Sivir"];
const sup=["Blitzcranck","Janna","Leona","Morgana","Thresh"];

window.onload = () =>{
    const mid = document.getElementById('SelectMid');
    mid.style.display = "none";

    const btn2 = document.getElementById('btn2');
    btn2.style.display = "none";

    const jungle = document.getElementById('SelectJungle');
    jungle.style.display = "none";

    const btn3 = document.getElementById('btn3');
    btn3.style.display = "none";

    const adc = document.getElementById('SelectAdc');
    adc.style.display = "none";

    const btn4 = document.getElementById('btn4');
    btn4.style.display = "none";

    const sup = document.getElementById('SelectSup');
    sup.style.display = "none";

    const btn5 = document.getElementById('btn5');
    btn5.style.display = "none";
}

const index = () =>
{
    window.location.href = "./index.html";
}

let click= 0
let clickmid= 0
let clickjungle= 0
let clickadc = 0
let clicksup = 0

const listar = () =>{

    //Listar TopLane

    if (click === 1)
    {
        document.getElementById('top').innerHTML ="Top Laner : " + vetor[0];
    }

    if (click === 2)
    {
        document.getElementById('top').innerHTML ="Top Laner : " + vetor[1];
    }
    if (click === 3)
    {
        document.getElementById('top').innerHTML ="Top Laner : " + vetor[2];
    }
    if (click === 4)
    {
        document.getElementById('top').innerHTML ="Top Laner : " + vetor[3];
    }
    if (click === 5)
    {
        document.getElementById('top').innerHTML ="Top Laner : " + vetor[4];
    }
    
    //Listar MidLane

    if (clickmid === 1)
    {
        document.getElementById('mid').innerHTML ="Mid Laner : " + midlane[0];
    }
    if (clickmid === 2)
    {
        document.getElementById('mid').innerHTML ="Mid Laner : " + midlane[1];
    }
    if (clickmid === 3)
    {
        document.getElementById('mid').innerHTML ="Mid Laner : " + midlane[2];
    }
    if (clickmid === 4)
    {
        document.getElementById('mid').innerHTML ="Mid Laner : " + midlane[3];
    }
    if (clickmid === 5)
    {
        document.getElementById('mid').innerHTML ="Mid Laner : " + midlane[4];
    }

    //Listar Jungle

    if (clickjungle === 1)
    {
        document.getElementById('jungle').innerHTML ="Jungle : " + junglelane[0];
    }
    if (clickjungle === 2)
    {
        document.getElementById('jungle').innerHTML ="Jungle : " + junglelane[1];
    }
    if (clickjungle === 3)
    {
        document.getElementById('jungle').innerHTML ="Jungle : " + junglelane[2];
    }
    if (clickjungle === 4)
    {
        document.getElementById('jungle').innerHTML ="Jungle : " + junglelane[3];
    }
    if (clickjungle === 5)
    {
        document.getElementById('jungle').innerHTML ="Jungle : " + junglelane[4];
    }

    //Listar Ad-Carry

    if (clickadc === 1)
    {
        document.getElementById('adc').innerHTML ="Ad-Carry : " + adc[0];
    }
    if (clickadc === 2)
    {
        document.getElementById('adc').innerHTML ="Ad-Carry : " + adc[1];
    }
    if (clickadc === 3)
    {
        document.getElementById('adc').innerHTML ="Ad-Carry : " + adc[2];
    }
    if (clickadc === 4)
    {
        document.getElementById('adc').innerHTML ="Ad-Carry : " + adc[3];
    }
    if (clickadc === 5)
    {
        document.getElementById('adc').innerHTML ="Ad-Carry : " + adc[4];
    }

    //Listar Suporte

    if (clicksup === 1)
    {
        document.getElementById('sup').innerHTML ="Suporte : " + sup[0];
    }
    if (clicksup === 2)
    {
        document.getElementById('sup').innerHTML ="Suporte : " + sup[1];
    }
    if (clicksup === 3)
    {
        document.getElementById('sup').innerHTML ="Suporte : " + sup[2];
    }
    if (clicksup === 4)
    {
        document.getElementById('sup').innerHTML ="Suporte : " + sup[3];
    }
    if (clicksup === 5)
    {
        document.getElementById('sup').innerHTML ="Suporte : " + sup[4];
    }
}


//funcionalidade TopLane

const hecarim = () => 
{
    const hecarim = document.getElementById('hecarim');
    const gnar = document.getElementById('gnar');
    const irelia = document.getElementById('irelia');
    const lissandra = document.getElementById('lissandra');
    const sion = document.getElementById('sion');

    if(click === 0){
        click = 1;
        alert(vetor[0]+" entrou no time");

        gnar.style.filter = "grayscale(100%)";
        irelia.style.filter = "grayscale(100%)";
        lissandra.style.filter = "grayscale(100%)";
        sion.style.filter = "grayscale(100%)";

        gnar.style.cursor = "not-allowed";
        irelia.style.cursor = "not-allowed";
        lissandra.style.cursor = "not-allowed";
        sion.style.cursor = "not-allowed";

        hecarim.style.border = "3px solid #dbb50b";
    }
    else if (click === 1){
        document.getElementById('top').innerHTML ="";
        click = 0
        alert(vetor[0]+" deixou seu time");

        gnar.style.filter = "grayscale(0%)";
        irelia.style.filter = "grayscale(0%)";
        lissandra.style.filter = "grayscale(0%)";
        sion.style.filter = "grayscale(0%)";

        gnar.style.cursor = "pointer";
        irelia.style.cursor = "pointer";
        lissandra.style.cursor = "pointer";
        sion.style.cursor = "pointer";

        hecarim.style.border = "none";
    }
    else if (click != 1){
        alert("Lane do top full");
    }
}

const gnar = () =>
{
    const hecarim = document.getElementById('hecarim');
    const gnar = document.getElementById('gnar');
    const irelia = document.getElementById('irelia');
    const lissandra = document.getElementById('lissandra');
    const sion = document.getElementById('sion');

    if(click === 0){
        click = 2;
        alert(vetor[1]+" entrou no time");

        hecarim.style.filter = "grayscale(100%)";
        irelia.style.filter = "grayscale(100%)";
        lissandra.style.filter = "grayscale(100%)";
        sion.style.filter = "grayscale(100%)";

        hecarim.style.cursor = "not-allowed";
        irelia.style.cursor = "not-allowed";
        lissandra.style.cursor = "not-allowed";
        sion.style.cursor = "not-allowed";

        gnar.style.border = "3px solid #dbb50b";
    }
    else if (click === 2){
        document.getElementById('top').innerHTML ="";
        click = 0
        alert(vetor[1]+" deixou seu time");

        hecarim.style.filter = "grayscale(0%)";
        irelia.style.filter = "grayscale(0%)";
        lissandra.style.filter = "grayscale(0%)";
        sion.style.filter = "grayscale(0%)";

        hecarim.style.cursor = "pointer";
        irelia.style.cursor = "pointer";
        lissandra.style.cursor = "pointer";
        sion.style.cursor = "pointer";

        gnar.style.border = "none";
    }
    else if (click != 2){
        alert("Lane do top full");
    }
}

const irelia = () =>
{
    const hecarim = document.getElementById('hecarim');
    const gnar = document.getElementById('gnar');
    const irelia = document.getElementById('irelia');
    const lissandra = document.getElementById('lissandra');
    const sion = document.getElementById('sion');
    
    if(click === 0){
        click = 3;
        alert(vetor[2]+" entrou no time");

        hecarim.style.filter = "grayscale(100%)";
        gnar.style.filter = "grayscale(100%)";
        lissandra.style.filter = "grayscale(100%)";
        sion.style.filter = "grayscale(100%)";

        hecarim.style.cursor = "not-allowed";
        gnar.style.cursor = "not-allowed";
        lissandra.style.cursor = "not-allowed";
        sion.style.cursor = "not-allowed";

        irelia.style.border = "3px solid #dbb50b";
    }
    else if (click === 3){
        document.getElementById('top').innerHTML ="";
        click = 0
        alert(vetor[2]+" deixou seu time");

        hecarim.style.filter = "grayscale(0%)";
        gnar.style.filter = "grayscale(0%)";
        lissandra.style.filter = "grayscale(0%)";
        sion.style.filter = "grayscale(0%)";

        hecarim.style.cursor = "pointer";
        gnar.style.cursor = "pointer";
        lissandra.style.cursor = "pointer";
        sion.style.cursor = "pointer";

        irelia.style.border = "none";
    }
    else if (click != 3){
        alert("Lane do top full");
    }
}

const lissandra = () =>
{
    const hecarim = document.getElementById('hecarim');
    const gnar = document.getElementById('gnar');
    const irelia = document.getElementById('irelia');
    const lissandra = document.getElementById('lissandra');
    const sion = document.getElementById('sion');

    if (click === 0){
        click = 4;
        alert(vetor[3]+" entrou no time");

        hecarim.style.filter = "grayscale(100%)";
        gnar.style.filter = "grayscale(100%)";
        irelia.style.filter = "grayscale(100%)";
        sion.style.filter = "grayscale(100%)";

        hecarim.style.cursor = "not-allowed";
        gnar.style.cursor = "not-allowed";
        irelia.style.cursor = "not-allowed";
        sion.style.cursor = "not-allowed";

        lissandra.style.border = "3px solid #dbb50b";
    }
    else if (click === 4){
        document.getElementById('top').innerHTML ="";
        click = 0
        alert(vetor[3]+" deixou seu time");

        hecarim.style.filter = "grayscale(0%)";
        gnar.style.filter = "grayscale(0%)";
        irelia.style.filter = "grayscale(0%)";
        sion.style.filter = "grayscale(0%)";

        hecarim.style.cursor = "pointer";
        gnar.style.cursor = "pointer";
        irelia.style.cursor = "pointer";
        sion.style.cursor = "pointer";

        lissandra.style.border = "none";
    }
    else if (click != 4){
        alert("Lane do top full");
    }
}

const sion = () =>
{
    const hecarim = document.getElementById('hecarim');
    const gnar = document.getElementById('gnar');
    const irelia = document.getElementById('irelia');
    const lissandra = document.getElementById('lissandra');
    const sion = document.getElementById('sion');

    if(click === 0){
        click = 5;
        alert(vetor[4]+" entrou no time");

        hecarim.style.filter = "grayscale(100%)";
        gnar.style.filter = "grayscale(100%)";
        irelia.style.filter = "grayscale(100%)";
        lissandra.style.filter = "grayscale(100%)";

        hecarim.style.cursor = "not-allowed";
        gnar.style.cursor = "not-allowed";
        irelia.style.cursor = "not-allowed";
        lissandra.style.cursor = "not-allowed";

        sion.style.border = "3px solid #dbb50b";
    }
    else if (click === 5){
        document.getElementById('top').innerHTML ="";
        click = 0
        alert(vetor[4]+" deixou seu time");

        hecarim.style.filter = "grayscale(0%)";
        gnar.style.filter = "grayscale(0%)";
        irelia.style.filter = "grayscale(0%)";
        lissandra.style.filter = "grayscale(0%)";

        hecarim.style.cursor = "pointer";
        gnar.style.cursor = "pointer";
        irelia.style.cursor = "pointer";
        lissandra.style.cursor = "pointer";

        sion.style.border = "none";
    }
    else if (click != 5){
        alert("Lane do top full");
    }
}

//funcionalidade MidLane

const yasuo = () => 
{
    const yasuo = document.getElementById('yasuo');
    const annie = document.getElementById('annie');
    const diana = document.getElementById('diana');
    const katarina = document.getElementById('katarina');
    const ahri = document.getElementById('ahri');

    if(clickmid === 0){
        clickmid = 1;
        alert(midlane[0]+" entrou no time");

        annie.style.filter = "grayscale(100%)";
        diana.style.filter = "grayscale(100%)";
        katarina.style.filter = "grayscale(100%)";
        ahri.style.filter = "grayscale(100%)";

        annie.style.cursor = "not-allowed";
        diana.style.cursor = "not-allowed";
        katarina.style.cursor = "not-allowed";
        ahri.style.cursor = "not-allowed";

        yasuo.style.border = "3px solid #dbb50b";
    }
    else if (clickmid === 1){
        document.getElementById('mid').innerHTML ="";
        clickmid = 0
        alert(midlane[0]+" deixou seu time");

        annie.style.filter = "grayscale(0%)";
        diana.style.filter = "grayscale(0%)";
        katarina.style.filter = "grayscale(0%)";
        ahri.style.filter = "grayscale(0%)";

        annie.style.cursor = "pointer";
        diana.style.cursor = "pointer";
        katarina.style.cursor = "pointer";
        ahri.style.cursor = "pointer";

        yasuo.style.border = "none";
    }
    else if (clickmid != 1){
        alert("Lane do Mid full");
    }
}

const annie = () =>
{
    const yasuo = document.getElementById('yasuo');
    const annie = document.getElementById('annie');
    const diana = document.getElementById('diana');
    const katarina = document.getElementById('katarina');
    const ahri = document.getElementById('ahri');

    if(clickmid === 0){
        clickmid = 2;
        alert(midlane[1]+" entrou no time");

        yasuo.style.filter = "grayscale(100%)";
        diana.style.filter = "grayscale(100%)";
        katarina.style.filter = "grayscale(100%)";
        ahri.style.filter = "grayscale(100%)";

        yasuo.style.cursor = "not-allowed";
        diana.style.cursor = "not-allowed";
        katarina.style.cursor = "not-allowed";
        ahri.style.cursor = "not-allowed";

        annie.style.border = "3px solid #dbb50b";
    }
    else if (clickmid === 2){
        document.getElementById('mid').innerHTML ="";
        clickmid = 0
        alert(midlane[1]+" deixou seu time");

        yasuo.style.filter = "grayscale(0%)";
        diana.style.filter = "grayscale(0%)";
        katarina.style.filter = "grayscale(0%)";
        ahri.style.filter = "grayscale(0%)";

        yasuo.style.cursor = "pointer";
        diana.style.cursor = "pointer";
        katarina.style.cursor = "pointer";
        ahri.style.cursor = "pointer";

        annie.style.border = "none";
    }
    else if (clickmid != 2){
        alert("Lane do Mid full");
    }
}

const diana = () =>
{
    const yasuo = document.getElementById('yasuo');
    const annie = document.getElementById('annie');
    const diana = document.getElementById('diana');
    const katarina = document.getElementById('katarina');
    const ahri = document.getElementById('ahri');

    if(clickmid === 0){
        clickmid = 3;
        alert(midlane[2]+" entrou no time");

        yasuo.style.filter = "grayscale(100%)";
        annie.style.filter = "grayscale(100%)";
        katarina.style.filter = "grayscale(100%)";
        ahri.style.filter = "grayscale(100%)";

        yasuo.style.cursor = "not-allowed";
        annie.style.cursor = "not-allowed";
        katarina.style.cursor = "not-allowed";
        ahri.style.cursor = "not-allowed";

        diana.style.border = "3px solid #dbb50b";
    }
    else if (clickmid === 3){
        document.getElementById('mid').innerHTML ="";
        clickmid = 0
        alert(midlane[2]+" deixou seu time");

        yasuo.style.filter = "grayscale(0%)";
        annie.style.filter = "grayscale(0%)";
        katarina.style.filter = "grayscale(0%)";
        ahri.style.filter = "grayscale(0%)";

        yasuo.style.cursor = "pointer";
        annie.style.cursor = "pointer";
        katarina.style.cursor = "pointer";
        ahri.style.cursor = "pointer";


        diana.style.border = "none";
    }
    else if (clickmid != 3){
        alert("Lane do Mid full");
    }
}

const katarina = () =>
{
    const yasuo = document.getElementById('yasuo');
    const annie = document.getElementById('annie');
    const diana = document.getElementById('diana');
    const katarina = document.getElementById('katarina');
    const ahri = document.getElementById('ahri');

    if(clickmid === 0){
        clickmid = 4;
        alert(midlane[3]+" entrou no time");

        yasuo.style.filter = "grayscale(100%)";
        annie.style.filter = "grayscale(100%)";
        diana.style.filter = "grayscale(100%)";
        ahri.style.filter = "grayscale(100%)";

        yasuo.style.cursor = "not-allowed";
        annie.style.cursor = "not-allowed";
        diana.style.cursor = "not-allowed";
        ahri.style.cursor = "not-allowed";

        katarina.style.border = "3px solid #dbb50b";
    }
    else if (clickmid === 4){
        document.getElementById('mid').innerHTML ="";
        clickmid = 0
        alert(midlane[9]+" deixou seu time");

        yasuo.style.filter = "grayscale(0%)";
        annie.style.filter = "grayscale(0%)";
        diana.style.filter = "grayscale(0%)";
        ahri.style.filter = "grayscale(0%)";

        yasuo.style.cursor = "pointer";
        annie.style.cursor = "pointer";
        diana.style.cursor = "pointer";
        ahri.style.cursor = "pointer";

        katarina.style.border = "none";
    }
    else if (clickmid != 4){
        alert("Lane do Mid full");
    }
}

const ahri = () =>
{
    const yasuo = document.getElementById('yasuo');
    const annie = document.getElementById('annie');
    const diana = document.getElementById('diana');
    const katarina = document.getElementById('katarina');
    const ahri = document.getElementById('ahri');

    if(clickmid === 0){
        clickmid = 5;
        alert(midlane[4]+" entrou no time");

        yasuo.style.filter = "grayscale(100%)";
        annie.style.filter = "grayscale(100%)";
        diana.style.filter = "grayscale(100%)";
        katarina.style.filter = "grayscale(100%)";

        yasuo.style.cursor = "not-allowed";
        annie.style.cursor = "not-allowed";
        diana.style.cursor = "not-allowed";
        katarina.style.cursor = "not-allowed";

        ahri.style.border = "3px solid #dbb50b";
    }
    else if (clickmid === 5){
        document.getElementById('mid').innerHTML ="";
        clickmid = 0
        alert(midlane[4]+" deixou seu time");

        yasuo.style.filter = "grayscale(0%)";
        annie.style.filter = "grayscale(0%)";
        diana.style.filter = "grayscale(0%)";
        katarina.style.filter = "grayscale(0%)";

        yasuo.style.cursor = "pointer";
        annie.style.cursor = "pointer";
        diana.style.cursor = "pointer";
        katarina.style.cursor = "pointer";

        ahri.style.border = "none";
    }
    else if (clickmid != 5){
        alert("Lane do Mid full");
    }
}

//Guncionalidade Junglers

const amumu = () => 
{
    const amumu = document.getElementById('amumu');
    const master_yi = document.getElementById('master_yi');
    const jarvan = document.getElementById('jarvan');
    const nidalee = document.getElementById('nidalee');
    const vi = document.getElementById('vi');

    if(clickjungle === 0){
        clickjungle = 1;
        alert(junglelane[0]+" entrou no time");

        master_yi.style.filter = "grayscale(100%)";
        jarvan.style.filter = "grayscale(100%)";
        nidalee.style.filter = "grayscale(100%)";
        vi.style.filter = "grayscale(100%)";

        master_yi.style.cursor = "not-allowed";
        jarvan.style.cursor = "not-allowed";
        nidalee.style.cursor = "not-allowed";
        vi.style.cursor = "not-allowed";

        amumu.style.border = "3px solid #dbb50b";
    }
    else if (clickjungle === 1){
        document.getElementById('jungle').innerHTML ="";
        clickjungle = 0
        alert(junglelane[0]+" deixou seu time");

        master_yi.style.filter = "grayscale(0%)";
        jarvan.style.filter = "grayscale(0%)";
        nidalee.style.filter = "grayscale(0%)";
        vi.style.filter = "grayscale(0%)";

        master_yi.style.cursor = "pointer";
        jarvan.style.cursor = "pointer";
        nidalee.style.cursor = "pointer";
        vi.style.cursor = "pointer";

        amumu.style.border = "none";
    }
    else if (clickjungle != 1){
        alert("Lane da Jungle full");
    }
}

const master_yi = () => 
{
    const amumu = document.getElementById('amumu');
    const master_yi = document.getElementById('master_yi');
    const jarvan = document.getElementById('jarvan');
    const nidalee = document.getElementById('nidalee');
    const vi = document.getElementById('vi');

    if(clickjungle === 0){
        clickjungle = 2;
        alert(junglelane[1]+" entrou no time");

        amumu.style.filter = "grayscale(100%)";
        jarvan.style.filter = "grayscale(100%)";
        nidalee.style.filter = "grayscale(100%)";
        vi.style.filter = "grayscale(100%)";

        amumu.style.cursor = "not-allowed";
        jarvan.style.cursor = "not-allowed";
        nidalee.style.cursor = "not-allowed";
        vi.style.cursor = "not-allowed";

        master_yi.style.border = "3px solid #dbb50b";
    }
    else if (clickjungle === 2){
        document.getElementById('jungle').innerHTML ="";
        clickjungle = 0
        alert(junglelane[1]+" deixou seu time");

        amumu.style.filter = "grayscale(0%)";
        jarvan.style.filter = "grayscale(0%)";
        nidalee.style.filter = "grayscale(0%)";
        vi.style.filter = "grayscale(0%)";

        amumu.style.cursor = "pointer";
        jarvan.style.cursor = "pointer";
        nidalee.style.cursor = "pointer";
        vi.style.cursor = "pointer";

        master_yi.style.border = "none";
    }
    else if (clickjungle != 2){
        alert("Lane da Jungle full");
    }
}

const jarvan = () => 
{
    const amumu = document.getElementById('amumu');
    const master_yi = document.getElementById('master_yi');
    const jarvan = document.getElementById('jarvan');
    const nidalee = document.getElementById('nidalee');
    const vi = document.getElementById('vi');

    if(clickjungle === 0){
        clickjungle = 3;
        alert(junglelane[2]+" entrou no time");

        amumu.style.filter = "grayscale(100%)";
        master_yi.style.filter = "grayscale(100%)";
        nidalee.style.filter = "grayscale(100%)";
        vi.style.filter = "grayscale(100%)";

        amumu.style.cursor = "not-allowed";
        master_yi.style.cursor = "not-allowed";
        nidalee.style.cursor = "not-allowed";
        vi.style.cursor = "not-allowed";


        jarvan.style.border = "3px solid #dbb50b";
    }
    else if (clickjungle === 3){
        document.getElementById('jungle').innerHTML ="";
        clickjungle = 0
        alert(junglelane[2]+" deixou seu time");

        amumu.style.filter = "grayscale(0%)";
        master_yi.style.filter = "grayscale(0%)";
        nidalee.style.filter = "grayscale(0%)";
        vi.style.filter = "grayscale(0%)";

        amumu.style.cursor = "pointer";
        master_yi.style.cursor = "pointer";
        nidalee.style.cursor = "pointer";
        vi.style.cursor = "pointer";

        jarvan.style.border = "none";
    }
    else if (clickjungle != 3){
        alert("Lane da Jungle full");
    }
}

const nidalee = () => 
{
    const amumu = document.getElementById('amumu');
    const master_yi = document.getElementById('master_yi');
    const jarvan = document.getElementById('jarvan');
    const nidalee = document.getElementById('nidalee');
    const vi = document.getElementById('vi');

    if(clickjungle === 0){
        clickjungle = 4;
        alert(junglelane[3]+" entrou no time");

        amumu.style.filter = "grayscale(100%)";
        master_yi.style.filter = "grayscale(100%)";
        jarvan.style.filter = "grayscale(100%)";
        vi.style.filter = "grayscale(100%)";

        amumu.style.cursor = "not-allowed";
        master_yi.style.cursor = "not-allowed";
        jarvan.style.cursor = "not-allowed";
        vi.style.cursor = "not-allowed";

        nidalee.style.border = "3px solid #dbb50b";
    }
    else if (clickjungle === 4){
        document.getElementById('jungle').innerHTML ="";
        clickjungle = 0
        alert(junglelane[3]+" deixou seu time");

        amumu.style.filter = "grayscale(0%)";
        master_yi.style.filter = "grayscale(0%)";
        jarvan.style.filter = "grayscale(0%)";
        vi.style.filter = "grayscale(0%)";

        amumu.style.cursor = "pointer";
        master_yi.cursor = "pointer";
        jarvan.style.cursor = "pointer";
        vi.style.cursor = "pointer";

        nidalee.style.border = "none";
    }
    else if (clickjungle != 4){
        alert("Lane da Jungle full");
    }
}

const vi = () => 
{
    const amumu = document.getElementById('amumu');
    const master_yi = document.getElementById('master_yi');
    const jarvan = document.getElementById('jarvan');
    const nidalee = document.getElementById('nidalee');
    const vi = document.getElementById('vi');

    if(clickjungle === 0){
        clickjungle = 5;
        alert(junglelane[4]+" entrou no time");

        amumu.style.filter = "grayscale(100%)";
        master_yi.style.filter = "grayscale(100%)";
        jarvan.style.filter = "grayscale(100%)";
        nidalee.style.filter = "grayscale(100%)";

        amumu.style.cursor = "not-allowed";
        master_yi.style.cursor = "not-allowed";
        jarvan.style.cursor = "not-allowed";
        nidalee.style.cursor = "not-allowed";

        vi.style.border = "3px solid #dbb50b";
    }
    else if (clickjungle === 5){
        document.getElementById('jungle').innerHTML ="";
        clickjungle = 0
        alert(junglelane[4]+" deixou seu time");

        amumu.style.filter = "grayscale(0%)";
        master_yi.style.filter = "grayscale(0%)";
        jarvan.style.filter = "grayscale(0%)";
        nidalee.style.filter = "grayscale(0%)";

        amumu.style.cursor = "pointer";
        master_yi.style.cursor = "pointer";
        jarvan.style.cursor = "pointer";
        nidalee.style.cursor = "pointer";

        vi.style.border = "none";
    }
    else if (clickjungle != 5){
        alert("Lane da Jungle full");
    }
}

const corki = () => 
{
    const corki = document.getElementById('corki');
    const graves = document.getElementById('graves');
    const jinx = document.getElementById('jinx');
    const kalista = document.getElementById('kalista');
    const sivir = document.getElementById('sivir');

    if(clickadc === 0){
        clickadc = 2;
        alert(adc[0]+" entrou no time");

        graves.style.filter = "grayscale(100%)";
        jinx.style.filter = "grayscale(100%)";
        kalista.style.filter = "grayscale(100%)";
        sivir.style.filter = "grayscale(100%)";

        graves.style.cursor = "not-allowed";
        jinx.style.cursor = "not-allowed";
        kalista.style.cursor = "not-allowed";
        sivir.style.cursor = "not-allowed";

        corki.style.border = "3px solid #dbb50b";
    }
    else if (clickadc === 2){
        document.getElementById('adc').innerHTML ="";
        clickadc = 0
        alert(adc[0]+" deixou seu time");

        graves.style.filter = "grayscale(0%)";
        jinx.style.filter = "grayscale(0%)";
        kalista.style.filter = "grayscale(0%)";
        sivir.style.filter = "grayscale(0%)";

        graves.style.cursor = "pointer";
        jinx.style.cursor = "pointer";
        kalista.style.cursor = "pointer";
        sivir.style.cursor = "pointer";

        corki.style.border = "none";
    }
    else if (clickadc != 2){
        alert("Lane do Ad-Carry full");
    }
}

const graves = () => 
{
    const corki = document.getElementById('corki');
    const graves = document.getElementById('graves');
    const jinx = document.getElementById('jinx');
    const kalista = document.getElementById('kalista');
    const sivir = document.getElementById('sivir');

    if(clickadc === 0){
        clickadc = 2;
        alert(adc[1]+" entrou no time");

        corki.style.filter = "grayscale(100%)";
        jinx.style.filter = "grayscale(100%)";
        kalista.style.filter = "grayscale(100%)";
        sivir.style.filter = "grayscale(100%)";

        corki.style.cursor = "not-allowed";
        jinx.style.cursor = "not-allowed";
        kalista.style.cursor = "not-allowed";
        sivir.style.cursor = "not-allowed";

        graves.style.border = "3px solid #dbb50b";
    }
    else if (clickadc === 2){
        document.getElementById('adc').innerHTML ="";
        clickadc = 0
        alert(adc[1]+" deixou seu time");

        corki.style.filter = "grayscale(0%)";
        jinx.style.filter = "grayscale(0%)";
        kalista.style.filter = "grayscale(0%)";
        sivir.style.filter = "grayscale(0%)";

        corki.style.cursor = "pointer";
        jinx.style.cursor = "pointer";
        kalista.style.cursor = "pointer";
        sivir.style.cursor = "pointer";

        graves.style.border = "none";
    }
    else if (clickadc != 2){
        alert("Lane do Ad-Carry full");
    }
}

const jinx = () => 
{
    const corki = document.getElementById('corki');
    const graves = document.getElementById('graves');
    const jinx = document.getElementById('jinx');
    const kalista = document.getElementById('kalista');
    const sivir = document.getElementById('sivir');

    if(clickadc === 0){
        clickadc = 2;
        alert(adc[2]+" entrou no time");

        graves.style.filter = "grayscale(100%)";
        corki.style.filter = "grayscale(100%)";
        kalista.style.filter = "grayscale(100%)";
        sivir.style.filter = "grayscale(100%)";

        graves.style.cursor = "not-allowed";
        corki.style.cursor = "not-allowed";
        kalista.style.cursor = "not-allowed";
        sivir.style.cursor = "not-allowed";

        jinx.style.border = "3px solid #dbb50b";
    }
    else if (clickadc === 2){
        document.getElementById('adc').innerHTML ="";
        clickadc = 0
        alert(adc[2]+" deixou seu time");

        graves.style.filter = "grayscale(0%)";
        corki.style.filter = "grayscale(0%)";
        kalista.style.filter = "grayscale(0%)";
        sivir.style.filter = "grayscale(0%)";

        graves.style.cursor = "pointer";
        corki.style.cursor = "pointer";
        kalista.style.cursor = "pointer";
        sivir.style.cursor = "pointer";

        jinx.style.border = "none";
    }
    else if (clickadc != 2){
        alert("Lane do Ad-Carry full");
    }
}

const kalista = () => 
{
    const corki = document.getElementById('corki');
    const graves = document.getElementById('graves');
    const jinx = document.getElementById('jinx');
    const kalista = document.getElementById('kalista');
    const sivir = document.getElementById('sivir');

    if(clickadc === 0){
        clickadc = 2;
        alert(adc[3]+" entrou no time");

        graves.style.filter = "grayscale(100%)";
        jinx.style.filter = "grayscale(100%)";
        corki.style.filter = "grayscale(100%)";
        sivir.style.filter = "grayscale(100%)";

        graves.style.cursor = "not-allowed";
        jinx.style.cursor = "not-allowed";
        corki.style.cursor = "not-allowed";
        sivir.style.cursor = "not-allowed";

        kalista.style.border = "3px solid #dbb50b";
    }
    else if (clickadc === 2){
        document.getElementById('adc').innerHTML ="";
        clickadc = 0
        alert(adc[3]+" deixou seu time");

        graves.style.filter = "grayscale(0%)";
        jinx.style.filter = "grayscale(0%)";
        corki.style.filter = "grayscale(0%)";
        sivir.style.filter = "grayscale(0%)";

        graves.style.cursor = "pointer";
        jinx.style.cursor = "pointer";
        corki.style.cursor = "pointer";
        sivir.style.cursor = "pointer";

        kalista.style.border = "none";
    }
    else if (clickadc != 2){
        alert("Lane do Ad-Carry full");
    }
}

const sivir = () => 
{
    const corki = document.getElementById('corki');
    const graves = document.getElementById('graves');
    const jinx = document.getElementById('jinx');
    const kalista = document.getElementById('kalista');
    const sivir = document.getElementById('sivir');

    if(clickadc === 0){
        clickadc = 2;
        alert(adc[4]+" entrou no time");

        graves.style.filter = "grayscale(100%)";
        jinx.style.filter = "grayscale(100%)";
        kalista.style.filter = "grayscale(100%)";
        corki.style.filter = "grayscale(100%)";

        graves.style.cursor = "not-allowed";
        jinx.style.cursor = "not-allowed";
        kalista.style.cursor = "not-allowed";
        corki.style.cursor = "not-allowed";

        sivir.style.border = "3px solid #dbb50b";
    }
    else if (clickadc === 2){
        document.getElementById('adc').innerHTML ="";
        clickadc = 0
        alert(adc[4]+" deixou seu time");

        graves.style.filter = "grayscale(0%)";
        jinx.style.filter = "grayscale(0%)";
        kalista.style.filter = "grayscale(0%)";
        corki.style.filter = "grayscale(0%)";

        graves.style.cursor = "pointer";
        jinx.style.cursor = "pointer";
        kalista.style.cursor = "pointer";
        corki.style.cursor = "pointer";

        sivir.style.border = "none";
    }
    else if (clickadc != 2){
        alert("Lane do Ad-Carry full");
    }
}

const blitzcranck = () => 
{
    const blitzcranck = document.getElementById('blitzcranck');
    const janna = document.getElementById('janna');
    const leona = document.getElementById('leona');
    const morgana = document.getElementById('morgana');
    const thresh = document.getElementById('thresh');

    if(clicksup === 0){
        clicksup = 2;
        alert(sup[0]+" entrou no time");

        janna.style.filter = "grayscale(100%)";
        leona.style.filter = "grayscale(100%)";
        morgana.style.filter = "grayscale(100%)";
        thresh.style.filter = "grayscale(100%)";

        janna.style.cursor = "not-allowed";
        leona.style.cursor = "not-allowed";
        morgana.style.cursor = "not-allowed";
        thresh.style.cursor = "not-allowed";

        blitzcranck.style.border = "3px solid #dbb50b";
    }
    else if (clicksup === 2){
        document.getElementById('adc').innerHTML ="";
        clicksup = 0
        alert(adc[0]+" deixou seu time");

        janna.style.filter = "grayscale(0%)";
        leona.style.filter = "grayscale(0%)";
        morgana.style.filter = "grayscale(0%)";
        thresh.style.filter = "grayscale(0%)";

        janna.style.cursor = "pointer";
        morgana.style.cursor = "pointer";
        leona.style.cursor = "pointer";
        thresh.style.cursor = "pointer";

        blitzcranck.style.border = "none";
    }
    else if (clicksup != 2){
        alert("Lane do Suporte full");
    }
}

const janna = () => 
{
    const blitzcranck = document.getElementById('blitzcranck');
    const janna = document.getElementById('janna');
    const leona = document.getElementById('leona');
    const morgana = document.getElementById('morgana');
    const thresh = document.getElementById('thresh');

    if(clicksup === 0){
        clicksup = 2;
        alert(sup[1]+" entrou no time");

        blitzcranck.style.filter = "grayscale(100%)";
        leona.style.filter = "grayscale(100%)";
        morgana.style.filter = "grayscale(100%)";
        thresh.style.filter = "grayscale(100%)";

        blitzcranck.style.cursor = "not-allowed";
        leona.style.cursor = "not-allowed";
        morgana.style.cursor = "not-allowed";
        thresh.style.cursor = "not-allowed";

        janna.style.border = "3px solid #dbb50b";
    }
    else if (clicksup === 2){
        document.getElementById('adc').innerHTML ="";
        clicksup = 0
        alert(adc[1]+" deixou seu time");

        blitzcranck.style.filter = "grayscale(0%)";
        leona.style.filter = "grayscale(0%)";
        morgana.style.filter = "grayscale(0%)";
        thresh.style.filter = "grayscale(0%)";

        blitzcranck.style.cursor = "pointer";
        morgana.style.cursor = "pointer";
        leona.style.cursor = "pointer";
        thresh.style.cursor = "pointer";

        janna.style.border = "none";
    }
    else if (clicksup != 2){
        alert("Lane do Suporte full");
    }
}

const leona = () => 
{
    const blitzcranck = document.getElementById('blitzcranck');
    const janna = document.getElementById('janna');
    const leona = document.getElementById('leona');
    const morgana = document.getElementById('morgana');
    const thresh = document.getElementById('thresh');

    if(clicksup === 0){
        clicksup = 2;
        alert(sup[2]+" entrou no time");

        janna.style.filter = "grayscale(100%)";
        blitzcranck.style.filter = "grayscale(100%)";
        morgana.style.filter = "grayscale(100%)";
        thresh.style.filter = "grayscale(100%)";

        janna.style.cursor = "not-allowed";
        blitzcranck.style.cursor = "not-allowed";
        morgana.style.cursor = "not-allowed";
        thresh.style.cursor = "not-allowed";

        leona.style.border = "3px solid #dbb50b";
    }
    else if (clicksup === 2){
        document.getElementById('adc').innerHTML ="";
        clicksup = 0
        alert(adc[2]+" deixou seu time");

        janna.style.filter = "grayscale(0%)";
        blitzcranck.style.filter = "grayscale(0%)";
        morgana.style.filter = "grayscale(0%)";
        thresh.style.filter = "grayscale(0%)";

        janna.style.cursor = "pointer";
        morgana.style.cursor = "pointer";
        blitzcranck.style.cursor = "pointer";
        thresh.style.cursor = "pointer";

        leona.style.border = "none";
    }
    else if (clicksup != 2){
        alert("Lane do Suporte full");
    }
}

const morgana = () => 
{
    const blitzcranck = document.getElementById('blitzcranck');
    const janna = document.getElementById('janna');
    const leona = document.getElementById('leona');
    const morgana = document.getElementById('morgana');
    const thresh = document.getElementById('thresh');

    if(clicksup === 0){
        clicksup = 2;
        alert(sup[3]+" entrou no time");

        janna.style.filter = "grayscale(100%)";
        leona.style.filter = "grayscale(100%)";
        blitzcranck.style.filter = "grayscale(100%)";
        thresh.style.filter = "grayscale(100%)";

        janna.style.cursor = "not-allowed";
        leona.style.cursor = "not-allowed";
        blitzcranck.style.cursor = "not-allowed";
        thresh.style.cursor = "not-allowed";

        morgana.style.border = "3px solid #dbb50b";
    }
    else if (clicksup === 2){
        document.getElementById('adc').innerHTML ="";
        clicksup = 0
        alert(adc[3]+" deixou seu time");

        janna.style.filter = "grayscale(0%)";
        leona.style.filter = "grayscale(0%)";
        blitzcranck.style.filter = "grayscale(0%)";
        thresh.style.filter = "grayscale(0%)";

        janna.style.cursor = "pointer";
        blitzcranck.style.cursor = "pointer";
        leona.style.cursor = "pointer";
        thresh.style.cursor = "pointer";

        morgana.style.border = "none";
    }
    else if (clicksup != 2){
        alert("Lane do Suporte full");
    }
}

const thresh = () => 
{
    const blitzcranck = document.getElementById('blitzcranck');
    const janna = document.getElementById('janna');
    const leona = document.getElementById('leona');
    const morgana = document.getElementById('morgana');
    const thresh = document.getElementById('thresh');

    if(clicksup === 0){
        clicksup = 2;
        alert(sup[4]+" entrou no time");

        janna.style.filter = "grayscale(100%)";
        leona.style.filter = "grayscale(100%)";
        morgana.style.filter = "grayscale(100%)";
        blitzcranck.style.filter = "grayscale(100%)";

        janna.style.cursor = "not-allowed";
        leona.style.cursor = "not-allowed";
        morgana.style.cursor = "not-allowed";
        blitzcranck.style.cursor = "not-allowed";

        thresh.style.border = "3px solid #dbb50b";
    }
    else if (clicksup === 2){
        document.getElementById('adc').innerHTML ="";
        clicksup = 0
        alert(adc[4]+" deixou seu time");

        janna.style.filter = "grayscale(0%)";
        leona.style.filter = "grayscale(0%)";
        morgana.style.filter = "grayscale(0%)";
        blitzcranck.style.filter = "grayscale(0%)";

        janna.style.cursor = "pointer";
        morgana.style.cursor = "pointer";
        leona.style.cursor = "pointer";
        blitzcranck.style.cursor = "pointer";

        thresh.style.border = "none";
    }
    else if (clicksup != 2){
        alert("Lane do Suporte full");
    }
}
//botão TopLane

const concluirtop = () =>
{
    const toplane = document.getElementById('SelectTop');
    const btn = document.getElementById('btn1');
    const mid = document.getElementById('SelectMid');
    const btn2 = document.getElementById('btn2');

    if(click != 0){
        toplane.style.display = "none";
        btn.style.display = "none";
        mid.style.display = "inline";
        btn2.style.display = "block";
    }
    else{
        alert("Selecione um personagem");
    }
}

//botão MidLane
const concluirmid = () =>
{
    const mid = document.getElementById('SelectMid');
    const btn2 = document.getElementById('btn2');
    const jg = document.getElementById('SelectJungle');
    const btn3 = document.getElementById('btn3');

    if(clickmid != 0){
        mid.style.display = "none";
        btn2.style.display = "none";
        jg.style.display = "inline";
        btn3.style.display = "block";
        
    }
    else{
        alert("Selecione um personagem");
    }
}

//botão Jungle
const concluirjungle = () =>
{
    const jg = document.getElementById('SelectJungle');
    const btn3 = document.getElementById('btn3');
    const adc = document.getElementById('SelectAdc');
    const btn4 = document.getElementById('btn4');

    if(clickjungle != 0){
        jg.style.display = "none";
        btn3.style.display = "none";
        adc.style.display = "inline";
        btn4.style.display = "block";
    }
    else{
        alert("Selecione um personagem");
    }
}

//botão Ad-Carry
const concluiradc = () =>
{
    const adc = document.getElementById('SelectAdc');
    const btn4 = document.getElementById('btn4');
    const sup = document.getElementById('SelectSup');
    const btn5 = document.getElementById('btn5');

    if(clickadc != 0){
        adc.style.display = "none";
        btn4.style.display = "none";
        sup.style.display = "inline";
        btn5.style.display = "block";
    }
    else{
        alert("Selecione um personagem");
    }
}
//botão Suporte
const concluirsup = () =>
{
    const sup = document.getElementById('SelectSup');
    const btn5 = document.getElementById('btn5');

    if(clicksup != 0){
        sup.style.display = "none";
        btn5.style.display = "none";
    }
    else{
        alert("Selecione um personagem");
    }
}