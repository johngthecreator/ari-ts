<script>
    import { timerStart } from "../ts_modules/timeStore";
    import EndModal from "./EndModal.svelte";
    let seconds = 15;
    let tens = 0;
    let end;
    export let score;
    export let game;

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
    {#if end}
        <EndModal game={game} finalScore={score}/>
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