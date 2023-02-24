<script>
    export let question = "loading..."
    export let instruct;

</script>
<div id="questionCard">
    <p><strong>{instruct}</strong></p>
    <h1>{question}</h1>
</div>
<style>
    #questionCard {
        text-align: center;
        padding: 20px;
        margin: 10px;
    }
    p{
        width: 300px;
    }

</style>