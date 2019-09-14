import React from "react";
import Amplify, { Storage } from 'aws-amplify';

class Upload extends React.Component { 
    onChange(e: any) {
        const file = e.target.files[0];
        Storage.put('example.png', file, {
            contentType: 'image/png'
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
    }
  
    render() {
        return (
            <input
                type="file" accept='image/png'
                onChange={(e) => this.onChange(e)}
            />
        )
    }
}
export default Upload;
// }
// export default function Upload() {
//     Storage.put()

//   return <div>Upload Picture</div>;
// }
