<script lang="ts">
    export let title;
    export let time;
    export let link;
    export let imgsrc;
</script>
<a href="{link}">
    <div class="blitzCard">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <h3>{title}</h3>
            <h3>{time}</h3>
        </div>
        <img src="{imgsrc}" alt="{imgsrc}" />
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
        display: flex;
        flex-direction: column;
    }
    .blitzCard h3{
        color: white;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
</style>