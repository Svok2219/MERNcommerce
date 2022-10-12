import React from 'react';

const Pwd = ({pwd}) => {
    console.log(pwd)
    return (
        <div>
                            <div class="col-xl-5 col-lg-5 col-md-6">
                    <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"> <img class="d-block w-100" style={{height:"30rem"}} src={pwd.images[0]} alt="First slide"/> </div>
                            <div class="carousel-item"> <img class="d-block w-100" style={{height:"30rem"}} src={pwd.images[1]} alt="Second slide"/> </div>
                            <div class="carousel-item"> <img class="d-block w-100 " style={{height:"30rem"}} src={pwd.images[2]} alt="Third slide"/> </div>
                        </div> 
                        <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev"> 
						<i class="fa fa-angle-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span> 
					</a>
                        <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next"> 
						<i class="fa fa-angle-right" aria-hidden="true"></i> 
						<span class="sr-only">Next</span> 
					</a>
                        <ol class="carousel-indicators">
                             <li data-target="#carousel-example-1" data-slide-to="0" class="active">
                                <img class="d-block w-100 img-fluid"  style={{height:"3rem"}} src={pwd.images[0] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="1">
                                <img class="d-block w-100 img-fluid" style={{height:"3rem"}} src={pwd.images[1] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="2">
                                <img class="d-block w-100 img-fluid" style={{height:"3rem"}} src={pwd.images[2] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li> 
                            {pwd.images.map((x)=>
                          
                            <li data-target="#carousel-example-1" data-slide-to="2">
                            {console.log(x)}
                                <img class="d-block w-100 img-fluid" style={{height:"3rem"}} src={x} alt="" />
                            </li>
                            )}
                        </ol> 
                    </div>
                </div>
        </div>
    );
};

export default Pwd;