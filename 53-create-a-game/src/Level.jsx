import { RigidBody } from "@react-three/rapier"

export default function Level(){
    return <>
    <RigidBody type="fixed">
        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 50 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </RigidBody>
    </>
}