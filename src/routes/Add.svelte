<script lang="ts">
    import CardButton from "../lib/CardButton.svelte";
    import Question from "../lib/Question.svelte";
    import Stopwatch from "../lib/Stopwatch.svelte";
    import BlitzModal from "../lib/BlitzModal.svelte";
    import { answer } from "../ts_modules/answerStore"
    import { checkAns } from "../ts_modules/CheckAns";
    import type { eqParams } from "../ts_modules/EqParams";
    
    let addParams: eqParams = {
      ansArray: [1, 63, 81, 19],
      eqNum1: 1,
      eqNum2: 2,
      answer: 0,
      score: 0,
    }

    const AddGQ = (n: number, eqObj: eqParams) => {
      checkAns(n, eqObj) ? addParams.score += 10 : (n != -3) ? addParams.score -= 5 : 
      addParams.eqNum2 = Math.floor(Math.random()*100)
      addParams.eqNum1 = Math.floor(Math.random()*15)
      addParams.answer = addParams.eqNum1+addParams.eqNum2
      addParams.ansArray[Math.floor(Math.random()*3)] = addParams.answer
      answer.set(-3)
    }

    answer.subscribe((val:number)=>{
        console.log(val)
        AddGQ(val, addParams)
    })

</script>

<div style="height:100%;">
  <div class="scoreBoard">
    <h3>Score: {addParams.score}</h3>
    <Stopwatch game="addition" score={addParams.score} />
  </div>
  <main>
    <BlitzModal title="Addition" />
    <Question question={`${addParams.eqNum2} + ${addParams.eqNum1}`} instruct="Solve this equation" />
    <CardButton answers={addParams.ansArray}/>
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