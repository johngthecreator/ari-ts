<script lang="ts">
    export let answers;
    import {answer} from "../ts_modules/answerStore"
    let matchSum = {
        matches:0,
        sum:0,
        pair1: -1,
        pair2: -1
    };

    const resetPairs = () => {
        matchSum.pair1 = -1;
        matchSum.pair2 = -1;
        matchSum.matches = 0;
        matchSum.sum = 0;
    }

    const updateAnswer = (num: number) => {
        answer.set(num);
        resetPairs();
    }

    const findPair = (num: number) =>{
        if (matchSum.matches == 0){
            matchSum.matches++;
            matchSum.pair1 = num;
            matchSum.sum += num;
        }else if (matchSum.matches == 1){
            matchSum.matches++;
            matchSum.sum += num;
            matchSum.pair2 = num;
        }
    }

</script>
<div>
    <div class="matchingButtons">
        {#each answers as option}
            <button class:active="{matchSum.pair1 === option || matchSum.pair2 === option}" id="match{option}" on:click={()=>findPair(option)}>{option}</button>
        {/each}
    </div>
    <div class="moveButtons">
        <button id="checkbutton" on:click={()=>resetPairs()}>clear</button>
        <button id="checkbutton" on:click={()=>updateAnswer(matchSum.sum)}>check</button>
    </div>
</div>
<style>
    div.matchingButtons{
        width: 250px;
        height: 250px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;


    }
    .matchingButtons button{
        height: 75px;
        width: 75px;
        border: 2px solid #9381FF;
        font-weight: 500;
        color: black;
        background-color: white;
        margin: 0;
        border-radius: 10px;
    }
    .matchingButtons button.active{
        background-color: #9381FF;
        color: white;
    }
    div.moveButtons{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .moveButtons button {
        margin-top: 25px;
        border-radius: 10px;
        background-color: #9381FF;
        color: white;
        border: 0;

    }


</style>