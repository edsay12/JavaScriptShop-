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

allLinks = () => {
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
}

loja = () => {
    var containerProdutos = document.getElementById('produtos');
    containerProdutos.innerHTML = ``;

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

    allLinks();
};

lojaFiltro = () => {
    var containerProdutos = document.getElementById('produtos');
    var buscaIpt = document.getElementById('busca');

    var busa = buscaIpt.value;

    containerProdutos.innerHTML = ``;
    
    items.map((item) => {
        var desc = item.desc.toLocaleLowerCase();
        var nome = item.nome.toLocaleLowerCase();

        if(desc.includes(busa.toLocaleLowerCase()) || nome.includes(busa.toLocaleLowerCase())){
            containerProdutos.innerHTML += `
                <div class="produto">
                    <h1>${item.nome}</h1>
                    <img src="${item.img}" />
                    <p>${item.desc} R$ ${item.preco}</p>
                    <center><a key="${item.id}" href="#">Adicionar ao carrinho</a></center>
                </div>
            `;

            console.log(busca.value + ' > ' + desc + ' > ' + nome)
        }
    });

    allLinks();
}

loja();

var buscaBtn = document.getElementById('buscaBtn');
var buscaIpt = document.getElementById('busca');
buscaIpt.hidden = true;

buscaBtn.addEventListener('click', function(event){
    if(buscaIpt.hidden){
        buscaIpt.hidden = false;
        lojaFiltro();
    }else{
        buscaIpt.hidden = true;
        loja();
    }
});

buscaIpt.addEventListener('keyup', function(event){
    if(!buscaIpt.hidden)
        lojaFiltro();
});

function add(event){

    let key = event.path[0].getAttribute('key')
    
    let produto = items[key];
    
    if(produto.quantidade + 1 <= produto.estoque)
        produto.quantidade ++;
    
    atualizarCarrinho();
}

function remove(event) {
    
    let key = event.path[0].getAttribute('key')
    
    let produto = items[key];
    
    produto.quantidade --;
    
    atualizarCarrinho();
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
                    <button class="minus-btn" onClick="remove(event);" type="button" key="${item.id}" name="button">
                        <i class="fas fa-minus" key="${item.id}"></i>
                    </button>
                    <input type="text" name="name" value="${item.quantidade}">
                    <button class="plus-btn" onClick="add(event);" key="${item.id}" type="button" name="button">
                        <i class="fas fa-plus" key="${item.id}"></i>
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