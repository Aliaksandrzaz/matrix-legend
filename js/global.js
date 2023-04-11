$(document).ready(function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('#date1, #date2, #date3').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        showOn: "button",
        buttonImage: "img/calendar-alt-regular.svg",
        buttonImageOnly: true,
        buttonText: "Select date",
        minDate: '-80Y',
        yearRange: "-100:+100"
    });
    $('#date1, #date2, #date3').mask('00-00-0000', {placeholder: "dd-mm-yyyy"});
    $('#date1').on('focus', function() {  });
});

function savePDFNEW() {
    var element = document.getElementById('main-div');
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
}

function svgToCanvas (targetElem) {
    var nodesToRecover = [];
    var nodesToRemove = [];

    var svgElem = targetElem.find('svg');
    console.log(svgElem);

    svgElem.each(function(index, node) {
        var parentNode = node.parentNode;
        var svg = parentNode.innerHTML;

        var canvas = document.createElement('canvas');

        canvg(canvas, svg);

        nodesToRecover.push({
            parent: parentNode,
            child: node
        });
        parentNode.removeChild(node);

        nodesToRemove.push({
            parent: parentNode,
            child: canvas
        });

        parentNode.appendChild(canvas);
    });
}

function saveMatrix() {
    var dd = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [35, 25],
        content: []
    };

    html2canvas(document.getElementById('main-div'), {
        onrendered: function (canvas) {
            dd.content.push({
                image: canvas.toDataURL('image/jpeg', 1.0),
                fit: [780, 500]
            });
            dd.content.push({
                text: 'some text'
            });
            pdfMake.createPdf(dd).download('matrix_personal.pdf');
        },
        background: "#fff",
        allowTaint: true
    });
}
