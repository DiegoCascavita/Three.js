import { RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"

export default function Player(){

    const [subscribeKeys, getKeys ] = useKeyboardControls()

    useFrame(()=>{
        const [forward, backward, leftward, rightward] = getKeys()

    })

    return <>
    <RigidBody>
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]}/>
        <meshNormalMaterial flatShading />
      </mesh>
    </RigidBody>
    </>
}