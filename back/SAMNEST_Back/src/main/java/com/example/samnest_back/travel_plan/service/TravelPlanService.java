package com.example.samnest_back.travel_plan.service;

import com.example.samnest_back.travel_plan.entity.DailyScheduleEntity;
import com.example.samnest_back.travel_plan.entity.TravelPlanEntity;
import com.example.samnest_back.travel_plan.repository.DailyScheduleRepository;
import com.example.samnest_back.travel_plan.repository.TravelPlanRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TravelPlanService {
    private final TravelPlanRepository travelPlanRepository;
    private final DailyScheduleRepository dailyScheduleRepository;

    public TravelPlanService(TravelPlanRepository travelPlanRepository,DailyScheduleRepository dailyScheduleRepository) {
        this.travelPlanRepository = travelPlanRepository;
        this.dailyScheduleRepository = dailyScheduleRepository;
    }

    public TravelPlanEntity createTravelPlan(String destination, LocalDate startDate, LocalDate endDate) {
        TravelPlanEntity travelPlanEntity = new TravelPlanEntity();
        travelPlanEntity.setDestination(destination);
        travelPlanEntity.setStartDate(startDate);
        travelPlanEntity.setEndDate(endDate);

        // startDate ~ endDate 까지 D-day 생성
        List<DailyScheduleEntity> dailySchedules = new ArrayList<>();
        for (LocalDate date = startDate; !date.isAfter(endDate); date = date.plusDays(1)) {
            DailyScheduleEntity dailyScheduleEntity = new DailyScheduleEntity();
            dailyScheduleEntity.setDate(date);
            dailyScheduleEntity.setTravelPlanEntity(travelPlanEntity);
            dailySchedules.add(dailyScheduleEntity);
        }

        travelPlanEntity.setDailySchedulesEntity(dailySchedules);

        // TravelPlan와 DailySchedules 저장
        TravelPlanEntity savedPlan = travelPlanRepository.save(travelPlanEntity);
        dailyScheduleRepository.saveAll(dailySchedules);

        return savedPlan;
    }

//    @Transactional
//    public DailyScheduleEntity addDailySchedule() {
//        Optional<TravelPlanEntity> travelPlanEntityOptional = travelPlanRepository.findById();
//
//    }
}
