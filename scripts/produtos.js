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
    },
	{
        id: 4,
        nome: 'Gabinete Gamer',
        desc: 'Gabinete Gamer - Coolermaster',
        especs: [
            '',
        ],
        categorias: [
            'eletronicos',
            'computadores',
            'gamer',
            'gabinete',
            'componentes'
        ],
        img: 'imagens/produtos/gabinete.png',
        estoque: 5,
        preco: 350,
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

add = () => {
    
    var pluss = document.getElementsByClassName('plus-btn');
    for(var i = 0; i < pluss.length; i++){
        let key = pluss[i].getAttribute('key');
        pluss[i].addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();

            let produto = items[key];
    
            if(produto.quantidade + 1 <= produto.estoque)
                produto.quantidade ++;
            
            atualizarCarrinho();
        });
    }
}

remove = () => {
    
    var remove = document.getElementsByClassName('minus-btn');
    for(var i = 0; i < remove.length; i++){
        let key = remove[i].getAttribute('key');
        remove[i].addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();

            let produto = items[key];
    
            produto.quantidade --;
            
            atualizarCarrinho();
        });
    }
}

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');

    containerCarrinho.innerHTML = `
        <div class="title">Carrinho de compras</div>
    `;

    var total = 0;

    items.map((item) => {
        if(item.quantidade > 0){

            total += item.preco * item.quantidade;
            containerCarrinho.innerHTML += `
                <div class="item">
                <div class="image">
                    <img max-width="150px" max-height="150px" src="${item.img}" alt="${item.id}" />
                </div>
            
                <div class="description">
                    <span>${item.desc}</span>
                </div>
            
                <div class="quantity">
                    <button class="minus-btn" onClick="remove();" type="button" key="${item.id}" name="button">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="text" name="name" value="${item.quantidade}">
                    <button class="plus-btn" onClick="add();" key="${item.id}" type="button" name="button">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            
                <div class="total-price">R$ ${item.preco * item.quantidade}</div>
                </div>
            `;
        }
    });

    if(total > 0){
        containerCarrinho.innerHTML += `
        <div class="title">Valor total: R$ ${total}</div>
        `;
    }
    if(total <= 0){
        containerCarrinho.innerHTML += `
        <p class="item">Seu carrinho está vazio!</p>
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