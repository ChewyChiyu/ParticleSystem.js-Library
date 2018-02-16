window.onload = function(){

	const canvas = document.getElementById("window")
	const context = canvas.getContext("2d")

	var emitterA = new ParticleEmitter(canvas.width*.3,canvas.height*.3)
	var emitterB = new ParticleEmitter(canvas.width*.7,canvas.height*.3)
	var emitterC = new ParticleEmitter(canvas.width/2,canvas.height*.3)
	emitterA.setParticleColor(255,0,0,1)
	emitterB.setParticleColor(0,255,0,1)
	emitterC.setParticleColor(0,0,255,1)
	emitterA.startSpawn()
	emitterB.startSpawn()
	emitterC.startSpawn()
	setInterval(function(){
		context.fillStyle="#FFFFFF";
		context.fillRect(0,0,canvas.width,canvas.height)
		emitterA.drawEmitter(canvas)
		emitterB.drawEmitter(canvas)
		emitterC.drawEmitter(canvas)

	}, 1000/60)

}
