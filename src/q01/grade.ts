let Score = Number(process.argv[2]);
if (isNaN(Score)){
    console.log('invalid');
}else if(Score < 0 ||Score >=101 ){
    console.log('Invalid');
}else{
    if (Score >= 80){
        console.log('A');
    }else if (Score >= 70){
        console.log('B');
    }else if (Score >= 60){

    console.log('C');
 }
    else if (Score >= 50){
        console.log('D');

    }else{
        console.log('F');
    }

}