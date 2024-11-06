function searchRecipe() {
    const ingredients = document.getElementById('ingredients').value.toLowerCase();
    const recipeResult = document.getElementById('recipeResult');
    
    if (ingredients.includes("tomate") && ingredients.includes("macarrao")) {
        recipeResult.innerHTML = `
            <h2>Receita de Macarronada</h2>
            <p><strong>Ingredientes:</strong> Macarrão, tomate, alho, azeite, sal, queijo parmesão</p>
            <p><strong>Modo de preparo:</strong> Cozinhe o macarrão até ficar al dente. Refogue o alho no azeite, adicione o tomate picado e cozinhe até formar um molho. Misture o macarrão ao molho, adicione sal a gosto e finalize com queijo parmesão.</p>
        `;
    } else if (ingredients.includes("frango") && ingredients.includes("ketchup") && ingredients.includes("creme de leite")) {
        recipeResult.innerHTML = `
            <h2>Receita de Estrogonofe de Frango</h2>
            <p><strong>Ingredientes:</strong> Frango, ketchup, creme de leite, cebola, alho, azeite, sal</p>
            <p><strong>Modo de preparo:</strong> Corte o frango em cubos e refogue com alho e cebola no azeite. Adicione ketchup e cozinhe até o frango estar bem cozido. Por fim, acrescente o creme de leite, misture bem e cozinhe por mais alguns minutos. Prontinho!</p>
        `;
    } else if (ingredients.includes("batata") && ingredients.includes("ovo")) {
        recipeResult.innerHTML = `
            <h2>Receita de Omelete com Batata</h2>
            <p><strong>Ingredientes:</strong> Batata, ovo, cebola, sal, pimenta, azeite</p>
            <p><strong>Modo de preparo:</strong> Cozinhe a batata até ficar macia e corte-a em cubos. Em uma frigideira, aqueça o azeite, adicione a cebola e refogue. Adicione os ovos batidos com sal e pimenta, e as batatas. Cozinhe até o omelete ficar dourado.</p>
        `;
    } else if (ingredients.includes("fuba") && ingredients.includes("leite") && ingredients.includes("açucar") && ingredients.includes("ovo") && ingredients.includes("fermento")) {
        recipeResult.innerHTML = `
            <h2>Receita de Bolo de Fubá</h2>
            <p><strong>Ingredientes:</strong> Fubá, leite, açúcar, ovo, óleo, fermento em pó</p>
            <p><strong>Modo de preparo:</strong> Em uma tigela, misture o fubá, o açúcar, os ovos, o óleo e o leite até obter uma massa homogênea. Adicione o fermento e misture delicadamente. Despeje em uma forma untada e leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos ou até dourar. Espere esfriar e sirva.</p>
        `;
    } else {
        recipeResult.innerHTML = `<p>Desculpe, não encontramos uma receita com esses ingredientes.</p>`;
    }
}
