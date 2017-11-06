var TopoLogin = React.createClass({
	            getInitialState : function(){
	                return {
	                    logo : "logo-labs.png"
	                }
	            },
	            render : function(){
	                return (
								<div className="container">
									<div className="navbar-header">
										<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
											<span class="sr-only">Toggle navigation</span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
										</button>
										<a className="navbar-brand" href="#">React Fodation</a>
									</div>
									<div id="navbar" className="navbar-collapse collapse">
										<form className="navbar-form navbar-right">
											<div className="form-group">
												<input type="text" placeholder="Login" className="form-control" />
											</div>
											<div className="form-group">
												<input type="password" placeholder="Senha" className="form-control" />
											</div>
											<button type="submit" className="btn btn-success">Logar</button>
										</form>
									</div>
								</div>
	                )
	            }
	        })
	        React.render( <TopoLogin/>, document.getElementById('navTopo'))