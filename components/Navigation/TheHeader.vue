<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
     <logo2/>
    </div>
   
    <nav class="primary_nav_wrap">
<ul>
  <li class="menu-item"><a href="#">About us</a></li>
  <li><a href="#">What we do</a>
    <ul>
      <li><a href="#">Sub Menu 1</a></li>
      <li><a href="#">Sub Menu 2</a></li>
      <li><a href="#">Sub Menu 3</a></li>
      <li><a href="#">Sub Menu 4</a>
        <ul>
          <li><a href="#">Deep Menu 1</a>
            <ul>
              <li><a href="#">Sub Deep 1</a></li>
              <li><a href="#">Sub Deep 2</a></li>
              <li><a href="#">Sub Deep 3</a></li>
                <li><a href="#">Sub Deep 4</a></li>
            </ul>
          </li>
          <li><a href="#">Deep Menu 2</a></li>
        </ul>
      </li>
      <li><a href="#">Sub Menu 5</a></li>
    </ul>
  </li>
  <li><a href="#">How we do it</a>
    <ul>
      <li><a href="#">Sub Menu 1</a></li>
      <li><a href="#">Sub Menu 2</a></li>
      <li><a href="#">Sub Menu 3</a></li>
    </ul>
  </li>
  <li><a href="#">Where we've done it</a>
    
  </li>
  
  <li><a href="#">Contact Us</a></li>
</ul>
</nav>
    <div class="spacer"></div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle"
import Logo2 from '~/components/Logo2.vue'

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    Logo2
  }
};
</script>




<style lang="scss" scoped >



.header-container {
  height: 100vh;
 
  z-index: 100;
  
}

.the-header {
  width: 100%;
  
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: $color-white;
  
  box-sizing: border-box;
  padding: 0 20px;
  flex: 1;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
  flex: 1 0 5%;
  align-self: flex-start;
  
}

.logo a {
  text-decoration: none;
  color: white;
}


.spacer {
  flex: 1 0 5%;
}

 .primary_nav_wrap
{
	margin-top:15px;
  display: flex;
  align-self: center;
  position: relative;
 
}

.primary_nav_wrap ul
{
	list-style:none;
  display: flex;
  flex-direction: column;
 
}

.primary_nav_wrap ul a
{
	display:flex;
	color:$color-black;
	text-decoration:none;
	font-weight:700;
	font-size:14px;
	line-height:32px;
	padding:0 15px;
	font-family:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif
}

.primary_nav_wrap ul li
{
	position:relative;
	float:left;
	margin:0;
	padding:0



  
  
}

.primary_nav_wrap ul li.current-menu-item
{
	background:#ddd
}

.primary_nav_wrap ul li:hover
{
	background:#f6f6f6
}

.primary_nav_wrap ul ul
{
	display:none;
	position:absolute;
	top:100%;
	left:0;
	background:#fff;
	padding:0
}

.primary_nav_wrap ul ul li
{
	float:none;
	width:200px
}

.primary_nav_wrap ul ul a
{
	line-height:120%;
	padding:10px 15px
}

.primary_nav_wrap ul ul ul
{
	top:0;
	left:100%
}

.primary_nav_wrap ul li:hover > ul
{
	display:block
}





@media (min-width: 768px) {

  .header-container {
  height: 8vh;
}

  .the-header {
     display: flex;
  flex-direction: row;
  
}

.logo{

align-self: center;

}

.primary_nav_wrap ul{


flex-direction: row;
	position:relative;
	float:left;
	margin:0;
	padding:0

}

}

</style>
