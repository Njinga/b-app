<template>
    <div id="notes" class="shadow-lg p-3 mb-5 rounded">
        <br />
        <h1><strong>INTRODUCTION</strong></h1>
        <h2>SOLVING QUADRATIC EQUATIONS</h2>
        <h3 class="text-danger">Completing the square</h3>

        <div >
        <p>We can complete the square to solve a Quadratic Equation (find where it is equal to zero). But a general Quadratic Equation can have a coefficient of <strong>a</strong> in front of x<sup>2</sup>:<p>

        <p>$$ax^2+bx+c=0$$</p>

        <p>But that is easy to deal with ... just divide the whole equation by <strong>a</strong> first, then carry on:</p>

        <p>$$x^{2}+(\frac{b}{a})x+\frac{c}{a}=0$$<p>

        <h4 class="text-primary">Steps</h4>

        <p>Now we can solve a quadratic equaton in 5 steps:</p>

        <p>
            <strong>. Step 1</strong> Divide all terms by <strong>a</strong>(the coffient of x<sup>2</sup>)<br /><br/>

            <strong>. Step 2</strong> Move the number term (<strong>c/a</strong>) to the right side of the equation.<br /><br/>

            <strong>. Step 3</strong> Complete the square on the left side of the equation and
            balance this by adding the same value to the right side of the equation. 
            We now have something that looks like <strong>(x + p)<sup>2</sup> = q</strong>, which can be solved rather easily:<p>

        <p><strong>. Step 4</strong> Take the square root on both sides of the equation.</p>
        <p>
            <strong>. Step 5</strong> Subtract the number that remains on the left side of the
            equation to find <strong>x</strong>.
        </p>
    </div>
        <br />
        <br />
        

    </div>
</template>

<script>

    export default {
        name: 'Notes'
    }

</script>
