document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace 'sample.pdf' with the actual path to your PDF file
    var pdfPath = "Payment Receipt college.pdf";

    var link = document.createElement('a');
    link.href = pdfPath;
    link.target = "_blank"; // Open in a new tab/window
    link.download = "Payment Receipt college.pdf"; // Rename the downloaded file

    // Trigger the download by simulating a click on the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });