<script lang="ts">
    import "@picocss/pico";
    import CardButton from "../lib/CardButton.svelte";
    import Question from "../lib/Question.svelte";
    import Stopwatch from "../lib/Stopwatch.svelte";
    import StartModal from "../lib/StartModal.svelte";
    import { answer } from "../answerStore"

    interface eqParams {
      ansArray: number[],
      eqNum1: number,
      eqNum2: number,
      answer: number,
      score: number
    }

    const multParams: eqParams = {
      ansArray: [1, 63, 81, 19],
      eqNum1: 1,
      eqNum2: 2,
      answer: 0,
      score: 0,
    }

    // let array = [1, 63, 81, 19];
    // let num1 = 1;
    // let num2 = 1;
    // let ans = 0;
    // let score = 0;

    const checkAns = (n: number) => {
      if((n == multParams.answer)&&(n != -3)){
        multParams.score += 10
      }else if ((n != multParams.answer)&&(n != -3)){
        multParams.score -= 5
      }
    }

    const genQ = (n: number) => {
      checkAns(n)
      multParams.eqNum2 = Math.floor(Math.random()*12)
      multParams.eqNum1 = Math.floor(Math.random()*12)
      multParams.ansArray[Math.floor(Math.random()*3)] = multParams.eqNum1*multParams.eqNum2
      multParams.answer = multParams.eqNum1*multParams.eqNum2
      answer.set(-3)
    }


    answer.subscribe((val:number)=>{
        genQ(val)
    })
</script>

<div style="height:100%;">
  <div class="scoreBoard">
    <h3>Score: {multParams.score}</h3>
    <Stopwatch score={multParams.score} />
  </div>
  <main>
    <StartModal />
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