// add songs

// event click 'add song button'
function clickAddSong() {

  let trkTitle = TrkTitleBOX.Text.ToString(); // need to sort these
  let trkNum = TrkNumBOX.Value;
  let album = AlbumBOX.Text.ToString();
  let artist = ArtistBOX.Text.ToString();
  let side = SideBOX.SelectedItem;
  let vibe = VibeBOX.Text.ToString();
  let tempo = TempoBOX.Text.ToString();
  let tags = TagsBOX.Text.ToString();
  let textBoxes = new TextBox[] {
    TrkTitleBOX,
    AlbumBOX,
    ArtistBOX,
    VibeBOX
  };


  for (var i = 0; i < textBoxes.length; i++) {
    let isValid = formValidation(textBoxes[i.contents, i.type]);
    if (!isValid) {
      // alert message
      alert(isValid);
      clearBoxes({
        i
      });
    }
  }

  // create db script
  let sqlQuery = 'something';
  let queryType = 'insert';
  let sqlResponse = executeDb(sqlQuery, queryType);
  if (!sqlResponse) {
    // alert error
    alert('no response from db');
    clearBoxes('all');
    return;


  }
}

// event click 'upload from file button'
function uploadFromFile() {
  // get file
  // validate file type
  // select modify or overwrite
  // add warniing for overwrite including some kind of input validation
  // execute db script
}

// action validation
function areYouSure() {
  // create some kind of formValidation
  if (validation) {


    return true;
  } else {
    //clear relevent boxes etc
    return false;
  }
}


//
