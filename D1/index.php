<!DOCTYPE html>
<html>
<head>
    <title>Kalender PHP</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
        .today {
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <?php
    // Fungsi untuk mendapatkan nama hari dalam bahasa Indonesia
    function getDayName($dayNumber) {
        $days = array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
        return $days[$dayNumber];
    }

    // Fungsi untuk membuat kalender
    function generateCalendar($month, $year) {
        // Mendapatkan tanggal pertama bulan
        $firstDayOfMonth = mktime(0, 0, 0, $month, 1, $year);
        // Mendapatkan hari pertama bulan (0 = Minggu, 6 = Sabtu)
        $firstDay = date('w', $firstDayOfMonth);
        // Mendapatkan jumlah hari dalam bulan
        $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);

        echo "<table>";
        echo "<tr>";
        echo "<th>" . getDayName(0) . "</th>";
        echo "<th>" . getDayName(1) . "</th>";
        echo "<th>" . getDayName(2) . "</th>";
        echo "<th>" . getDayName(3) . "</th>";
        echo "<th>" . getDayName(4) . "</th>";
        echo "<th>" . getDayName(5) . "</th>";
        echo "<th>" . getDayName(6) . "</th>";
        echo "</tr>";

        echo "<tr>";
        // Menampilkan sel kosong untuk hari-hari sebelum tanggal 1
        for ($i = 0; $i < $firstDay; $i++) {
            echo "<td></td>";
        }

        for ($day = 1; $day <= $daysInMonth; $day++) {
            if ($day == date('d') && $month == date('m') && $year == date('Y')) {
                $class = 'today';
            } else {
                $class = '';
            }
            echo "<td class='$class'>$day</td>";
            if (($day + $firstDay) % 7 == 0) {
                echo "</tr><tr>";
            }
        }

        echo "</tr>";
        echo "</table>";
    }

    // Mendapatkan bulan dan tahun saat ini
    $currentMonth = date('m');
    $currentYear = date('Y');

    // Menampilkan kalender
    generateCalendar($currentMonth, $currentYear);
    ?>
</body>
</html>