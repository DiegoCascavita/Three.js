import { RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useRef, useEffect } from "react"

export default function Player(){

    const body = useRef()
    const [subscribeKeys, getKeys ] = useKeyboardControls()

    const jump = () => {
        const origin = body.current.translation()
        origin.y -= 0.31
        const direction = { x: 0, y: -1, z: 0 }
        body.current.applyImpulse({x: 0, y: 0.5, z: 0})
    }

    useEffect(()=>{
        subscribeKeys(
            (state)=>{
                return state.jump
            },
            (value)=>{
                if(value)
                jump()
            }
        )
    },[])

    useFrame((state, delta)=>{
        const {forward, backward, leftward, rightward} = getKeys()

        const impulse = { x: 0.0, y: 0.0, z: 0 }
        const torque = { x: 0, y: 0, z:0 }

        const impulseStrength = 0.6 * delta
        const torqueStrength = 0.2 * delta

        if(forward){
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }
        if(rightward){
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }
        if(backward){
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }
        if(leftward){
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }
        

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)


    })

    return <>
    <RigidBody ref={body} colliders="ball" friction={1} linearDamping={0.6}>
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]}/>
        <meshNormalMaterial flatShading />
      </mesh>
    </RigidBody>
    </>
}