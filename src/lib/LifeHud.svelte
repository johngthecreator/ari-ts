<script lang="ts">
    import EndModal from "./EndModal.svelte";
    import FinishModal from "./FinishModal.svelte";

    export let question: number = 1;
    export let lifeCounter: number = 5;

</script>
<div class="lifeHud">
    <h3>{question}/10</h3>
    <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
        <img src="./life.png" alt="heart"/>
        <h3>{lifeCounter}</h3>
    </div>
</div>
{#if lifeCounter <= 0}
    <FinishModal title="Oh no you died!" message="You lost all your life points before you could answer all the questions. Better luck next time!"/>
{/if}

{#if question >= 10}
    <FinishModal title="Good Job!" message="You were able to answer all the questions correctly without losing all your life points."/>
{/if}

<style>
    div.lifeHud{
        display: flex; 
        justify-content:space-between; 
        padding: 15px;
        align-items: center;
    }
    h3{
        margin: 0;
    }
    img {
        height: 30px;
        width: 30px;
    }
</style>