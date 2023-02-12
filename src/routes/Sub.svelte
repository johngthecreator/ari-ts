<script lang="ts">
    import CardButton from "../lib/CardButton.svelte";
    import Question from "../lib/Question.svelte";
    import Stopwatch from "../lib/Stopwatch.svelte";
    import StartModal from "../lib/StartModal.svelte";
    import { answer } from "../ts_modules/answerStore"
    import { checkAns } from "../ts_modules/CheckAns";
    import type { eqParams } from "../ts_modules/EqParams";
    
    let subParams: eqParams = {
      ansArray: [1, 63, 81, 19],
      eqNum1: 1,
      eqNum2: 2,
      answer: 0,
      score: 0,
    }

    const AddGQ = (n: number, eqObj: eqParams) => {
      checkAns(n, eqObj) ? subParams.score += 10 : (n != -3) ? subParams.score -= 5 : 
      subParams.eqNum2 = Math.floor(Math.random()*50)
      subParams.eqNum1 = Math.floor(Math.random()*40)
      subParams.answer = subParams.eqNum1-subParams.eqNum2
      subParams.ansArray[Math.floor(Math.random()*3)] = subParams.answer
      answer.set(-3)
    }

    answer.subscribe((val:number)=>{
        console.log(val)
        AddGQ(val, subParams)
    })

</script>

<div style="height:100%;">
  <div class="scoreBoard">
    <h3>Score: {subParams.score}</h3>
    <Stopwatch game="subtraction" score={subParams.score} />
  </div>
  <main>
    <StartModal title="Subtraction" />
    <Question question={`${subParams.eqNum1} - ${subParams.eqNum2}`} />
    <CardButton answers={subParams.ansArray}/>
  </main>
</div>

<style>
  main {
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div.scoreBoard {
    display: flex; 
    justify-content:space-between; 
    padding: 15px;
  }
</style>