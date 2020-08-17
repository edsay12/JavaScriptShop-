const items = [
    {
        id: 0,
        nome: 'Razer Deathadder v1',
        desc: 'Mouse gamer \'Death adder\' by Razer',
        especs: [
            'Sensor optico',
            'Cabo usb 2.0',
            'Necessita Driver',
            '7.500 DPI'
        ],
        categorias: [
          'eletronicos',
          'computadores',
          'gamer'  
        ],
        img: 'imagens/produtos/deathadderv1.png',
        estoque: 15,
        preco: 130,
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'Razer Deathadder v2',
        desc: 'Mouse gamer \'Death adder\' by Razer',
        especs: [
            'Sensor optico',
            'Cabo usb 3.0 banhado a ouro',
            'Necessita Driver',
            '10.000 DPI'
        ],
        categorias: [
            'eletronicos',
            'computadores',
            'gamer'  
          ],
        img: 'imagens/produtos/deathadderv2.png',
        estoque: 1,
        preco: 130,
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'Geforce GTX 1060',
        desc: 'Placa de video Geforce GTX 1060',
        especs: [
            'Memoria DDR5',
            'Frequencia: 8008 MHz',
            'Tamanho da memória: 6GB',
        ],
        categorias: [
            'eletronicos',
            'computadores',
            'gamer',
            'placa de video',
            'componentes'
        ],
        img: 'imagens/produtos/gtx1060.png',
        estoque: 2,
        preco: 1300,
        quantidade: 0,
    },
    {
        id: 3,
        nome: 'Geforce GTX 1050 ti',
        desc: 'Placa de video Geforce GTX 1050 ti',
        especs: [
            'Memoria DDR5',
            'Frequencia: 8008 MHz',
            'Tamanho da memória: 6GB',
        ],
        categorias: [
            'eletronicos',
            'computadores',
            'gamer',
            'placa de video',
            'componentes'
        ],
        img: 'imagens/produtos/gtx1050ti.png',
        estoque: 2,
        preco: 1250,
        quantidade: 0,
    }
];

loja = () => {
    var containerProdutos = document.getElementById('produtos');
    
    /* 
        items.map((item) => {
            containerProdutos.innerHTML += `
                <div class="produto">
                    <h1>${item.nome}</h1>
                    <img src="${item.img}" />
                    <p>${item.desc}</p>
                    <p>R$ ${item.preco}</p>
                    <p>Em estoque: ${item.estoque}</p>
                    <p><strong> ${item.especs.join('<br>')} </strong></p>
                    <center><a key="${item.id}" href="#">Adicionar ao carrinho</a></center>
                </div>
            `;
        });
    */
   
    items.map((item) => {
        containerProdutos.innerHTML += `
            <div class="produto">
                <h1>${item.nome}</h1>
                <img src="${item.img}" />
                <p>${item.desc} R$ ${item.preco}</p>
                <center><a key="${item.id}" href="#">Adicionar ao carrinho</a></center>
            </div>
        `;
    });
};

loja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');

    containerCarrinho.innerHTML = "";

    var total = 0;

    items.map((item) => {
        if(item.quantidade > 0){

            total += item.preco * item.quantidade;
            containerCarrinho.innerHTML += `
                <p><strong>${item.nome}</strong> R$: ${item.preco} (x ${item.quantidade})</p>
                <hr>
            `;
        }
    });

    if(total > 0){
        containerCarrinho.innerHTML += `
                <p><strong>Total: R$ ${total}</strong></p>
                <hr>
        `;

    }
};

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){

    links[i].addEventListener("click", function(e){
        e.preventDefault();

        let key = this.getAttribute('key');

        let produto = items[key];

        if(produto.quantidade + 1 <= produto.estoque)
            produto.quantidade ++;
        
        atualizarCarrinho();
        return false;
    });
}