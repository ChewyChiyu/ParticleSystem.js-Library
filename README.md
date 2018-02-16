# ParticleSystem.js-Library
A small library for particle systems

## Installation
	 <script src="ParticleEmitter.js/ParticleEmitter.min.js"></script>
   
## Usage
   ```javascript
      //Create new instance of ParticleEmitter, default parameters set if wanted
      var emitter = new ParticleEmitter(x,y)
      
      //set max number of particles possible, -1 if infinte
      emitter.setMaxParticleCount(num)
      
      //set the interaction between gravity and particles, gravity var for strength
      emitter.isAffectedByGravity(bool,gravity)
      
      //the range of particle spawn from center pos, x and y displacement
      emitter.setSpawnRange(x,y) 
      
      //setting the size of the individual particle 
      emitter.setParticleSize(width,height)
      
      //setting color of particle, alpha included
      emitter.setParticleColor(r,g,b,a)
      
      //setting the alpha decay rate
      emitter.setAlphaRate(rate)
      
      //setting the inital impulse of scatter 
      emitter.setScatterImpulse(maxDx, maxDy)
      
      //setting the spawn rate of particles
      emitter.setParticleSpawnRate(speed)
      
      //setting lifeline of the particle
      emitter.setLifeTime(time)
      
      //loading up the particle and starting it up
      emitter.startSpawn()
      
      //drawing the emitter and its particles
      emitter.drawEmitter(canvas)
      
   ```

