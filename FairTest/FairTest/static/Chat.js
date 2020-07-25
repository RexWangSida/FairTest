export default function Chat() {
    var Messages = document.getElementById("messages");
    var InMessages = document.getElementById("input-messages");
    var Send = document.getElementById("send");

    Send.onclick = function Send() {
        var str = "";

        if (InMessages.value == "") {
            document.getElementById("warning-msg").innerHTML =
                "Empty message";
            $("#warning-modal-shade").modal("toggle");
        } else {
            str = '<div class="message"><span>' + InMessages.value + '</span></div>';
            InMessages.value = "";
        }

        Messages.innerHTML = Messages.innerHTML + str;
    }

    InMessages.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            Send.click();
        }
    });

}