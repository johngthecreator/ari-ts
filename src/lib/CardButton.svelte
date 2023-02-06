<script>
    export let answers;
    import {answer} from "../answerStore"

    const updateAnswer = (num) => {
        answer.set(num);
    }

</script>
<div id="gamePad">
    {#each answers as option}
        <button class="cardButton" on:click={()=>updateAnswer(option)}>{option}</button>
    {/each}
</div> 
<style>
    #gamePad {
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        width: 600px;
        gap: 10px;
    }
    button.cardButton {
        padding: 30px;
        text-align: center;
        border-radius: 10px;
        border: 2px solid #9381FF;
        font-weight: 500;
        color: black;
        background-color: white;
        margin: 0;
    }
    .cardButton:hover {
        background-color: #9381FF;
        color: white;
        transition-duration: 0.3s;
    }
    @media screen and (max-width: 500px){
        #gamePad {
            width: 320px;
        }
        @media(hover:none){
            .cardButton:hover{
                color: black;
                background-color: white;
                border: 2px solid #9381FF;
            }
        }

    }


</style>