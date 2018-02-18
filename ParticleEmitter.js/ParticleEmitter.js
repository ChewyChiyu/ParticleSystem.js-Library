

function ParticleEmitter(x,y) {
		//DEFAULT PARAMETERS
		this.position = {x: x, y: y}
		this.spawnRange = {x: 5, y: 5}
		this.maxParticleCount = -1
		this.particlesSpawned = 0
		this.particleSize = {w: 12, h: 7}
		this.particleColor = {r: 0, g: 0, b: 0, a: 1}
		this.particleAlphaRate = 0.01
		this.scatterImpulse = {max_dx: 1.1, max_dy: 1.1}
		this.particleSpawnRate = 15
		this.lifeSpeed = 6
		this.particles = []
		this.spawnClock = null
		this.particleLifeClock = null
		this.affectedByGravity = {bool: true, gravity: .01}
}
ParticleEmitter.prototype = {

	setMaxParticleCount: function(num){
		if(isNumber(num)){
			this.maxParticleCount = num
		}
		return this
	},
	isAffectedByGravity: function(bool, gravity){
		if(bool && isNumber(gravity)){
			this.affectedByGravity = {bool: true, gravity: gravity}

		}else{
			this.affectedByGravity.bool = false
		}
		return this
	},
	setSpawnRange: function(x,y){
		if(isNumber(x,y)){
			this.spawnRange = {x:x,y:y}
		}
		return this
	},
	setParticleSize: function(width,height){
		if(isNumber(width,height)){
			this.particleSize = {w: width, h: height}
		}
		return this
	},
	setParticleColor: function(r,g,b,a){

		if(isNumber(r,g,b,a)){
			this.particleColor = {r:r,g:g,b:b,a:a}
		}
		return this
	},
	setAlphaRate: function(rate){
		if(isNumber(rate) && rate<=1 && rate >= 0){
			this.particleAlphaRate = rate
		}
		return this
	},
	setScatterImpulse: function(maxDx, maxDy){
		if(isNumber(maxDx,maxDy)){
			this.scatterImpulse = {max_dx: maxDx, max_dy: maxDy}
		}
		return this
	},
	setParticleSpawnRate: function(speed){
		if(isNumber(speed)){
			this.particleSpawnRate = speed
		}
		return this
	},
	setLifeTime: function(time){
		if(isNumber(time)){
			this.lifeSpeed = time
		}
		return this
	},
	startSpawn: function(){
		if(this.spawnClock == null && this.particleLifeClock == null){
			this.particlesSpawned = 0
			this.spawnClock = setInterval(spawn, this.particleSpawnRate,this)
			this.particleLifeClock = setInterval(particleLife,this.lifeSpeed,this)
		}
		return this
	},
	drawEmitter: function(canvas){
		if(canvas==null){return}
			var context = canvas.getContext("2d")
		for(var i = 0; i < this.particles.length; i++){
			var particle = this.particles[i]
			context.fillStyle = "rgba("+this.particleColor.r+","+this.particleColor.g+","+this.particleColor.b+","+particle.alpha+")"
			context.fillRect(particle.x,particle.y,this.particleSize.w,this.particleSize.h)
		}
		return this
	}
}

function particleLife(emitter){
	if(emitter.spawnClock == null && emitter.particles.length == 0){
		clearInterval(emitter.particleLifeClock)
		emitter.particleLifeClock = null
	}
	for(var i =0; i < emitter.particles.length; i++){
		var particle = emitter.particles[i]
		if(particle.alpha <= 0){
			emitter.particles.splice(i,1)
			continue
		}
		particle.x += particle.dx
		particle.y += (emitter.affectedByGravity) ? particle.dy += emitter.affectedByGravity.gravity : particle.dy
		particle.alpha -= Math.abs(emitter.particleAlphaRate)
	}
}


function spawn(emitter){
	if(emitter.particlesSpawned++ < emitter.maxParticleCount || emitter.maxParticleCount == -1){
		emitter.particles.push({x: emitter.position.x + getRandomNum(emitter.spawnRange.x), y: emitter.position.y + getRandomNum(emitter.spawnRange.y), dx: getRandomNum(emitter.scatterImpulse.max_dx), dy: getRandomNum(emitter.scatterImpulse.max_dy), alpha: emitter.particleColor.a })
	}else{
		clearInterval(emitter.spawnClock)
		emitter.spawnClock = null
	}
}

function getRandomNum(vector){
	if(Math.random() < .5){
		return (Math.random() * vector)
	}else{
		return -(Math.random() * vector)
	}
}

function isNumber(){
	for(var i = 0; i < arguments.length; i++){
		var num = arguments[i]
		if(typeof num != 'number'){ return false }
	}
	return true
}





