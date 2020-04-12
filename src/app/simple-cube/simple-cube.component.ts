import {Component, NgZone, OnInit} from '@angular/core';
import * as THREE from 'three';

/**
 * Simple component representing rotating cube
 * using Three.js library, transformed into OOP code
 * @link https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
 */
@Component({
  selector: 'app-simple-cube',
  templateUrl: './simple-cube.component.html',
  styleUrls: ['./simple-cube.component.scss']
})
export class SimpleCubeComponent implements OnInit {

  private readonly scene;
  private readonly camera;
  private readonly renderer;
  private readonly geometry;
  private readonly cubeMaterials;
  private readonly cube;

  constructor(private ngZone: NgZone) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append( this.renderer.domElement );

    this.geometry = new THREE.BoxGeometry();

    this.cubeMaterials = [
      new THREE.MeshBasicMaterial( {color: 0x00ff00} ),
      new THREE.MeshBasicMaterial( {color: 0x3285a8} ),
      new THREE.MeshBasicMaterial( {color: 0x966edb} ),
      new THREE.MeshBasicMaterial( {color: 0xf211cd} ),
      new THREE.MeshBasicMaterial( {color: 0xf23a11} ),
      new THREE.MeshBasicMaterial( {color: 0xabf211} ),
    ];

    this.cube = new THREE.Mesh( this.geometry, this.cubeMaterials);

    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  ngOnInit(): void {
    this.cubeAnimation();
  }

  /**
   * Cube animation functionallity
   * !!! See how it's explicitly run outside Zone.js !!!
   * Simply said, improves performance of animation,
   * if the reader doesn't get why, read about Zone.js use in Angular
   */
  private cubeAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame( this.cubeAnimation.bind(this) );

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render( this.scene, this.camera );
    });
  }

}
