def condense_meeting_times (meetings_today=[])
  return "There are no meetings today" if (meetings_today.length == 0)
  meetings_today.sort!
  condensed_meetings = []
  start_time = meetings_today[0][0]
  end_time   = meetings_today[0][1]

  meetings_today.each_with_index do |current_meeting, i|
    next if i === 0
    current_meeting_start_time = current_meeting[0]
    current_meeting_end_time   = current_meeting[1]

    if current_meeting_start_time > end_time
      condensed_meetings << [start_time, end_time]
      start_time = current_meeting_start_time
    end
    end_time = max([current_meeting_end_time, end_time])
  end

  condensed_meetings << [start_time, end_time]
  return condensed_meetings
end

def max(values)
  max = 0
  values.each {|value| max = value if value > max}
  max
end


result1 = condense_meeting_times([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])
p "#{result1} #{result1 == [[0, 1], [3, 8], [9, 12]]}"

result2 = condense_meeting_times([[1, 5], [2, 3]])
p "#{result2} #{result2 == [[1,5]]}"

result3 = condense_meeting_times([[1, 10], [2, 6], [3, 5], [7,9]])
p "#{result3} #{result3 == [[1,10]]}"
