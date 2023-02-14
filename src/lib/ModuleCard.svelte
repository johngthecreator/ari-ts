<script lang="ts">
    export let title;
    export let time;
    export let link;
</script>
<a href="{link}">
    <div class="blitzCard">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <h3>{title}</h3>
            <h3>{time}</h3>
        </div>
    </div>
</a>
<style>
    div.blitzCard{
        background-color: #9381FF;
        color: white;
        min-height: 300px;
        height: 300px;
        min-width: 275px;
        width: 275px;
        padding: 15px;
        border-radius: 15px;
        margin-right: 40px;
        box-shadow: 0px 10px 15px 0px #888888;
    }
    .blitzCard h3{
        color: white;
    }
    a {
        text-decoration: none;
    }
</style>