<template>
    <header>
        <div id="logo" class="menuUp">
            <logo2/>
            <div class="navToggle" @click="toggleButton" v-bind:class="{ 'change': active }">
    
                <div class="  bar1"></div>
                <div class="  bar2"></div>
                <div class="  bar3"></div>
    
    
    
            </div>
        </div>
        <nav v-bind:class="{ 'nav-active': active }">
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">What we do<span class="toggle">Expand</span><span class="caret"></span></a>
                    <nav>
                        <ul>
                            <li><a href="#">Lab Testing</a></li>
                            <li><a href="#">Geological Consultancy</a></li>
                            <li><a href="#">Oil and Gas Services</a></li>
                            <li><a href="#">Site Investigation</a></li>
                            <li><a href="#">Drilling</a></li>
                            <li><a href="#">Contaminated Land</a></li>
                        </ul>
                    </nav>
    
                </li>
                <li>
                    <a href="#">How we do it <span class="toggle">Expand</span><span class="caret"></span></a>
                    <nav>
                        <ul>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Stuff</a></li>
                        </ul>
                    </nav>
                </li>
                <li><a href="#">Where we've done it</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </header>
</template>


<script>
    import {
    
        TweenMax
    
    } from "gsap";
    
    import Text from "gsap/TextPlugin"
    import TimelineMax from "gsap/TimelineMax";
    import buttonMain from "@/components/Layout/button.vue"
    import Logo2 from '~/components/Logo2.vue'
        
    
    export default {
        components: {
            buttonMain,
            Logo2
        },
    
    
    
        data() {
    
            return {
    
                active: false
    
    
            }
        },
    
        mounted() {
    
    
    
    
        },
    
        methods: {
    
            toggleButton: function() {
    
                this.active = !this.active;
                console.log(this.active);
    
    
    
    
    
            },
    
    
    
    
    
    
    
    
    
    
    
            first: function() {
    
    
    
                this.master.play(1);
    
    
            },
            middle: function() {
    
                //this.master.seek(this.createPanel(".slider2"));
    
    
            },
            last: function() {
    
                //this.master.add(this.createPanel(".slider3"))
                //.play();
    
            },
    
    
    
    
    
    
    
        }
    
    
    }
</script>

<style lang="scss">
    header {
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        text-align: center;
        position: absolute;
        width: 100vw;
        z-index: 3;
        max-height: 6.5vh;
    }
    
    header>div#logo {
        line-height: 70px;
        position: relative;
    }
    
    header>.menuDown {
        box-shadow: 0 3px 5px rgba(0, 0, 0, .15);
    }
    
    header>.menuUp {
        box-shadow: none;
    }
    
    header>div#logo>h1 {
        color: white;
        font-weight: 300;
        text-transform: lowercase;
    }
    
    header>div#logo>div.navToggle {
        background-color: rgba(0, 0, 0, .15);
        position: absolute;
        right: 0;
        top: 0;
        transition: 300ms all ease;
    }
    
    header>div#logo>div.navToggle:hover {
        background-color: #ff7f2a;
    }
    
    header>div#logo>div.navToggle>a {
        color: rgba(255, 255, 255, .85);
        display: block;
        font-size: 0.25em;
        font-weight: 600;
        padding: 0 2.5rem;
        text-decoration: none;
        transition: 300ms all ease;
    }
    
    header>div#logo>div.navToggle:hover>a {
        color: rgba(255, 255, 255, 1);
    }
    
    header>nav {
        background-color: white;
        display: none;
        flex: 1;
        transform: 300ms all ease;
        z-index: 1;
        margin-top: 20px;
        transition: all 3.5s;
    }
    
    .nav-active {
        display: block;
        transform: scale(1.3);
    }
    
    header nav>ul {
        list-style-type: none;
    }
    
    header nav>ul>li {
        border-bottom: 1px dotted rgba(0, 0, 0, .1);
        position: relative;
    }
    
    header nav>ul>li:last-of-type {
        border-bottom: none;
    }
    
    header nav>ul>li>a {
        display: block;
        color: rgba(0, 0, 0, .65);
        font-weight: 500;
        padding: 1.5rem 0;
        text-decoration: none;
        transition: 250ms all ease;
    }
    
    header nav>ul>li>a span.toggle {
        background-color: rgba(0, 0, 0, .05);
        border-radius: 3rem;
        color: rgba(0, 0, 0, .25);
        font-size: 0.75em;
        font-weight: 500;
        padding: 2px 8px;
        text-transform: lowercase;
    }
    
    header nav>ul>li>a span.caret {
        display: none;
    }
    
    header>nav>ul>li:hover>a {
        color: #ff7f2a;
    }
    
    header>nav>ul>li>nav {
        background-color: rgb(51, 51, 51);
        border-radius: 1.5em;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .6);
        display: none;
        overflow: hidden;
        position: absolute;
        right: 5%;
        width: 100%;
        z-index: 100;
        font-size: 14px;
    }
    
    header>nav>ul>li>nav>ul>li>a {
        color: rgba(255, 255, 255, .85);
        transition: 300ms all ease;
    }
    
    header>nav>ul>li>nav>ul>li:hover>a {
        background-color: rgba(0, 0, 0, .6);
        color: rgba(255, 255, 255, 1);
    }
    
    .navToggle {
        margin-right: 15px;
        margin-top: 10px;
    }
    
    .bar1,
    .bar2,
    .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
    
    
    /* Rotate first bar */
    
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    
    
    /* Fade out the second bar */
    
    .change .bar2 {
        opacity: 0;
    }
    
    
    /* Rotate last bar */
    
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
    
    
    /* Medium screens */
    
    @media all and (min-width: 600px) {
        header>div#logo>div.navToggle {
            display: none;
        }
        header {
            background-color: white;
            flex-direction: row;
            line-height: 90px;
            padding: 0 3rem;
            position: relative;
            text-align: left;
            width: 100%;
        }
        header>div#logo {
            background-color: transparent;
            line-height: 90px;
        }
        header>div#logo>h1 {
            color: rgb(140, 193, 193);
        }
        header>nav {
            background-color: transparent;
            display: block;
            margin-top: 0;
        }
        header>nav>ul {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-end;
        }
        header nav>ul>li {
            border-bottom: none;
        }
        header nav>ul>li>a {
            padding: 0 1.25rem;
        }
        header nav>ul>li>a span.toggle {
            display: none;
        }
        header nav>ul>li>a span.caret {
            border-bottom: 4px solid transparent;
            border-top: 4px solid #ff7f2a;
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
            border-radius: 1px;
            content: "";
            display: inline-block;
            height: 0;
            margin: 0 0 0 .25rem;
            transition: 250ms all ease;
            width: 0;
            vertical-align: middle;
        }
        header nav>ul>li:hover>a span.caret {
            border-top-color: black;
            transform: rotate(270deg);
        }
        header>nav>ul>li:hover>nav {
            background-color: rgb(51, 51, 51);
            border-radius: .25em;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .6);
            display: block;
            line-height: 3em;
            right: -50%;
            width: 196px;
        }
    }
</style>

