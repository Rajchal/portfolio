import { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/animations/walla.glb");
  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "/models/animations/twerk.fbx"
  );
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/Rapping.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/animations/disco.fbx"
  );

  const cleanAnimationTrackNames = (animations, prefixToRemove) => {
    animations.forEach((animation) => {
      animation.tracks.forEach((track) => {
        if (track.name.startsWith(prefixToRemove)) {
          track.name = track.name.replace(prefixToRemove, "");
        }
      });
    });
  };

  idleAnimation[0].name = "idle";
  cleanAnimationTrackNames(idleAnimation, "mixamorig");
  saluteAnimation[0].name = "salute";
  cleanAnimationTrackNames(saluteAnimation, "mixamorig");
  clappingAnimation[0].name = "clapping";
  cleanAnimationTrackNames(clappingAnimation, "mixamorig");
  victoryAnimation[0].name = "victory";
  cleanAnimationTrackNames(victoryAnimation, "mixamorig");

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ],
    group
  );

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => {
        actions[animationName].fadeOut(0.5);
      };
    }
  }, [animationName, actions]);

  useEffect(() => {
    if (group.current) {
      if (animationName === "idle") {
        group.current.position.y = -1.3; // Adjust the height when idle
      } else {
        group.current.position.y = -3; // Normal height for other animations
      }
      if (animationName === "salute") {
        group.current.rotation.y = 3.14; // Rotate the camera angle when salute
      } else if (animationName === "clapping") {
        group.current.rotation.y = 0.5; // Rotate the camera angle when clapping
      } else {
        group.current.rotation.y = 0; // Default camera angle for other animations
      }
    }
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Headwear.geometry}
        material={materials.Wolf3D_Headwear}
        skeleton={nodes.Wolf3D_Headwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/walla.glb");

Developer.propTypes = {
  animationName: PropTypes.string,
};

Developer.defaultProps = {
  animationName: "idle",
};

export default Developer;
