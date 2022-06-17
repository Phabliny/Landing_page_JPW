import React, { Component } from 'react';
import slideshow from '../json/slideshow.json'

export default class Elemento_generico extends Component {
    constructor(props){
        super(props);
        this.state = slideshow
    }
    render() {
        return (
            <div class="elemento_footer" onLoad="comeco();regular()">
                    <a id="aId"/><img id="imgId"/>
                    <br/>
                    <a id="prev" href="javascript:menos()">Anterior</a>.<a id="next" href="javascript:mais()">Próximo</a>
                    <form name="form">
                    <input type="text" name="texto"/>
                    </form>
            </div>
        );
    }
    componentDidMount(){
        function comeco(){
            document.getElementById('imgId').src = array1[0]
            document.form.texto.value="0"
            }
            
            function mais(){
            document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
            if (document.form.texto.value > 2)
            {document.form.texto.value = 0}
            }
            
            function menos(){
            document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
            if (document.form.texto.value < 0)
            {document.form.texto.value = 2}
            }
            
            function regular(){
            document.getElementById('imgId').src = array1[document.form.texto.value];
            setTimeout("regular()", 1)
            }
    }
}