alert("ようこそ世界");

let counter = 0;

// getUserMedia によるカメラ映像の取得
var media = navigator.mediaDevices.getUserMedia({
    video: true,//ビデオを取得する
    audio: false,//音声が必要な場合はture
});
//リアルタイムに再生（ストリーミング）させるためにビデオタグに流し込む
media.then((stream) => {
    video.srcObject = stream;
});