<script>
    import { timerStart } from "../timeStore";
    import EndModal from "./EndModal.svelte";
    let seconds = 15;
    let tens = 0;
    let end;
    export let score;

    const start = () => {
        if(seconds != 0){
            if (tens < 100){
                tens ++;
            }else if (tens >= 100){
                seconds --;
                tens = 0;
            }
        } else if (seconds == 0){
            end = true;
        }
    }

    timerStart.subscribe(val=>{
        if(val){
            setInterval(start, 10) 
        }
    })



</script>
<div>
    <!-- <button on:click={()=>timer = setInterval(timerStart, 10)}>Start</button>
    <button on:click={()=>clearInterval(timer)}>Stop</button>
    <button on:click={timerReset}>Reset</button> -->
    {#if end}
    <EndModal finalScore={score}/>
    {/if}
    <div id="timerDisplay">
            <h3>{seconds}</h3>
    </div>

</div>

<style>
    #timerDisplay {
        display: flex;
        max-width: 100px;
        justify-content: space-evenly;
    }
</style>