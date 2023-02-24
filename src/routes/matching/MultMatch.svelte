<script lang="ts">
    import MatchButton from "../../lib/MatchButton.svelte";
    import { checkAns } from "../../ts_modules/CheckAns";
    import { answer } from "../../ts_modules/answerStore";
    import type { eqParams } from "../../ts_modules/EqParams";
    import { onMount } from "svelte";
    import Question from "../../lib/Question.svelte";
    import LifeHud from "../../lib/LifeHud.svelte";
    import StartModal from "../../lib/StartModal.svelte";

    let qCount = 1;
    let lCount = 3;

    let addMatchParams: eqParams = {
      ansArray: [1, 5, 10, 9, 2, 3, 12, 11, 4],
      eqNum1: 1,
      eqNum2: 2,
      answer: 0,
    }
    
    const GenQ = () => {
        addMatchParams.eqNum2 = Math.floor(Math.random()*12)
        addMatchParams.eqNum1 = Math.floor(Math.random()*12)
        addMatchParams.answer = addMatchParams.eqNum1*addMatchParams.eqNum2
        if (!addMatchParams.ansArray.includes(addMatchParams.eqNum2)){
            addMatchParams.ansArray[Math.floor(Math.random()*8)] = addMatchParams.eqNum2;
        }
        if (!addMatchParams.ansArray.includes(addMatchParams.eqNum1)){
            let rand = Math.floor(Math.random()*8)
            if (addMatchParams.ansArray[rand] != addMatchParams.eqNum2) {
                addMatchParams.ansArray[rand] = addMatchParams.eqNum1;
            }else{
                if(addMatchParams.eqNum2 == addMatchParams.ansArray[4] ){
                    addMatchParams.ansArray[0] = addMatchParams.eqNum1;
                }else{
                    addMatchParams.ansArray[4] = addMatchParams.eqNum1;
                }
            }
        }
        answer.set(-3)
    }


    onMount(()=>{
        GenQ();
    })
    

    const GenAddMatch = (n: number, eqObj: eqParams) => {
        if(checkAns(n, eqObj)){
            qCount++;
            GenQ();
        }else if(!checkAns(n, eqObj) && n != -3){
            lCount--;
        }
    }

    answer.subscribe((val:number)=>{
        GenAddMatch(val, addMatchParams)
    })


</script>
<LifeHud question={qCount} lifeCounter={lCount}/>
<div class="hud">
    <StartModal title="Matching Game: Mult" message="Match up the numbers that multiply to the number shown!" />

    <div class="hudCompWrapper">
        <Question question={`${addMatchParams.answer}`} instruct="Tap the numbers that add up to" />
        <MatchButton answers={addMatchParams.ansArray}/>
    </div>
</div>
<style>
    div.hud{
        display: flex;
        justify-content: center;
        padding-top: 10px;

    }
    div.hudCompWrapper{
        display: grid;
        justify-items: center;
    }
</style>