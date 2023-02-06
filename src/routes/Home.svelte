<script>
    import Footer from "../lib/Footer.svelte";

</script>
<main>
    <div id="heroBanner">
        <h1>Mental Math <br> Made <span style="color: #9381FF">Easy</span>.</h1>
    </div>
    <div class="infoContainer">
        <div class="infoText">
            <h1>What Is Ari?</h1>
            <p>Ari is an innovative web application that utilizes short and engaging games to reinforce mathematical concepts. It helps users solidify their understanding of mathematical principles in a fun and interactive way, making the learning process enjoyable and memorable. With its focus on practical application and interactive gameplay, Ari is changing the way people think about mathematics and learning.</p>
        </div>
        <img src="./sitting.webp" alt="person sitting"/>
    </div>
    <div class="features">
            <h1>Learn More.</h1>
            <p class="featuresBlurb">Ari is designed to fit the fast-paced and demanding environments we live and work in. With its efficient approach to learning, Ari is the perfect solution for anyone looking to improve their mathematical understanding in today's fast-paced world.</p>
            <div class="cardContainer">
                <div class="infoCards">
                    <img src="./pens.webp" alt="pens"/>
                    <h3>Study Smart</h3>
                    <p>Ari revolutionizes the way you approach mental math by using interactive exercises and personalized learning paths to target your unique strengths and weaknesses. Say goodbye to rote memorization and hello to a more efficient and enjoyable studying experience with Ari.</p>
                </div>
                <div class="infoCards">
                    <img src="./books.webp" alt="books" />
                    <h3>Guided Lessons</h3>
                    <p>Guided lessons are tailored to your specific needs, helping you quickly identify and address areas for improvement in your mental math skills. Ari's lessons provide a supportive and effective learning environment for anyone looking to boost their arithmetic abilities.</p>
                </div>
                <div class="infoCards">
                    <img src="./test.webp" alt="test"/>
                    <h3>Micro Quizzes</h3>
                    <p>Ari's micro quizzing system is designed to optimize memorization and retention through frequent, bite-sized assessments. Ari ensures that mental math concepts are ingrained in your long-term memory for effortless recall in real-world situations.</p>
                </div>
            </div>
    </div>
    <div class="infoContainer">
        <img src="globe.webp" alt="person sitting"/>
        <div class="infoText">
            <h1>Our Mission</h1>
            <p>Our mission is to empower individuals with confidence in mental mathematics through intuitive and engaging web-based learning experiences. We strive to provide accessible and effective tools to enhance arithmetic abilities and promote a lifelong love for numbers.</p>
        </div>
    </div>
</main>
<Footer />
<style>
    div#heroBanner{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        padding: 15px;
        background-image: url(./cube.webp);
        height: 800px;
    }
    #heroBanner h1 {
        color: black;
        font-size: 70px;
        font-weight: 800;
    }

    div.infoText {
        padding: 20px;
        width: 50%;
    }

    div.infoContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #9381FF;
        height: 500px;
    }

    .infoContainer h1, .infoContainer p {
        color: white;
    }

    div.features {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
        background-color: white;
    }

    .features p.featuresBlurb {
        width: 600px;
    }

    .features h1, .features p, .features h3{
        color: black;
    }

    div.cardContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }

    div.infoCards {
        height: auto;
        width: 300px;
        border-radius: 10px;
        padding: 15px;
        margin: 10px;
        text-align: left;
    }
    
    .infoCards img {
        width: 100px;
        margin-bottom: 15px;
    }



    @media screen and (max-width: 768px){
        div.infoContainer {
            display: flex;
            flex-direction: column;
            justify-content: none;
            height: auto;
            padding: 15px;
        }
        div.infoText {
        width: 100%;
        }
        #heroBanner h1 {
        color: black;
        font-size: 50px;
        }
        div#heroBanner{
        align-items: center;
        }
        .features p.featuresBlurb {
        width: auto;
        }
        div.cardContainer {
        flex-direction: column;
        align-items: center;
        }
    }
    @media screen and (min-width: 1450px){
        div#heroBanner{
            background-size: cover;
        }
        #heroBanner h1 {
            margin-top: 120px;
            font-size: 80px;
        }


    }

</style>