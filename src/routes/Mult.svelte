<script lang="ts">
    import CardButton from "../lib/CardButton.svelte";
    import Question from "../lib/Question.svelte";
    import Stopwatch from "../lib/Stopwatch.svelte";
    import StartModal from "../lib/StartModal.svelte";
    import { answer } from "../ts_modules/answerStore"
    import { checkAns } from "../ts_modules/CheckAns";
    import type { eqParams } from "../ts_modules/EqParams";
    
    let multParams: eqParams = {
      ansArray: [1, 63, 81, 19],
      eqNum1: 1,
      eqNum2: 2,
      answer: 0,
      score: 0,
    }

    const MultGQ = (n: number, eqObj: eqParams) => {
      checkAns(n, eqObj) ? multParams.score += 10 : (n != -3) ? multParams.score -= 5 : 
      multParams.eqNum2 = Math.floor(Math.random()*12)
      multParams.eqNum1 = Math.floor(Math.random()*12)
      multParams.answer = multParams.eqNum1*multParams.eqNum2
      multParams.ansArray[Math.floor(Math.random()*3)] = multParams.answer
      answer.set(-3)
    }

    answer.subscribe((val:number)=>{
        console.log(val)
        MultGQ(val, multParams)
    })

</script>

<div style="height:100%;">
  <div class="scoreBoard">
    <h3>Score: {multParams.score}</h3>
    <Stopwatch game="multiplication" score={multParams.score} />
  </div>
  <main>
    <StartModal title="Multiplication"/>
    <Question question={`${multParams.eqNum1} x ${multParams.eqNum2}`} />
    <CardButton answers={multParams.ansArray}/>
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