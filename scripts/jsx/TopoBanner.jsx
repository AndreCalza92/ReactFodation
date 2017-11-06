var TopoBanner = React.createClass({
	            getInitialState : function(){
	                return {
	                    logo : "logo-labs.png"
	                }
	            },
	            render : function(){
	                return (
								<div className="container">
									<h1>Olá viajante do tempo!! 🖖</h1>
									<p>Este vai ser um belo exemplo de utilização do React com Html, Bootstrap jQuery e afins...vamos ver no que vai dar!</p>
									<p><a className="btn btn-primary btn-lg" href="#" role="button">Não faz nada mesmo</a></p>
								</div>
	                )
	            }
	        })
	        React.render( <TopoBanner/>, document.getElementById('dvBanner'))