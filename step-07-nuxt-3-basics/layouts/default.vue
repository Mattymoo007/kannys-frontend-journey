<template>
    <div>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/task">Task</NuxtLink></li>
            </ul>
        </nav>
    </div>
    <div>
        <slot />
    </div>
</template>