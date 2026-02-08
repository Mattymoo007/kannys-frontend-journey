<template>
    <Navbar />
    
    <main>
        <div id="app">
            <slot />
        </div>
    </main>
</template>

<style scoped>
main {
  display: flex;
  place-items: center;
  background-color: #74bdb7;
  margin: 0;
  height: calc(100vh - 46px);
  font: 16px 'Poppins', sans-serif;
}
#app {
  width: 90%;
  background-color: #f9f6ed;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 20px;
}

button,
input,
select {
  font: 16px 'Poppins', sans-serif;
  padding: 15px 7px;
}

@media (min-width: 1024px) {
  #app {
    width: 70%;
  }
}
</style>